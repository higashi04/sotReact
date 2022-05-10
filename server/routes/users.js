const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

const { getToken, COOKIE_OPTIONS, getRefreshToken, verifyUser } = require("../auth")

router.post('/register', async(req, res)=>{
    try{
        if (req.body.firstName === undefined) {
            res.statusCode = 500
            res.send({
              name: "FirstNameError",
              message: "Es necesario registrar el primer nombre.",
            })
          } else {
            User.register(
              new User({ email: req.body.email, username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, puesto: req.body.puesto }),
              req.body.password,
              (err, user) => {
                if (err) {
                  res.statusCode = 500
                  res.send(err)
                } else {
                  const token = getToken({ _id: user._id })
                  const refreshToken = getRefreshToken({ _id: user._id })
                  user.refreshToken.push({ refreshToken })
                  user.save((err, user) => {
                    if (err) {
                      res.statusCode = 500
                      res.send(err)
                    } else {
                      res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS)
                      res.send({success: true, token})
                    }
                  })
                }
              }
            )
        }
        // req.flash('success', 'éxito')
    }catch(e){
        // req.flash('error', 'Se produjo un problema al registrar al usuario')
        console.log(e)
   }
});


router.post('/login', passport.authenticate('local'), (req, res, next) => {
    const token = getToken({_id: req.user._id})
    const refreshToken = getRefreshToken({_id: req.user._id})
    User.findById(req.user._id).then(
        user => {
            user.refreshToken.push({refreshToken})
            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS)
                    res.send({success: true, token})
                }
            })
        },
        err => next(err)
    )  
})

router.post('/refreshToken', (req, res, next) => {
    const { signedCookies = {} } = req
    const { refreshToken } = signedCookies

    if (refreshToken) {
        try {
            const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
            const userId = payload._id
            User.findOne({_id: userId}).then(
                user => {
                    if (user) {
                        const tokenIndex = user.refreshToken.findIndex(
                            item => item.refreshToken === refreshToken
                        )
                        if (tokenIndex === -1) {
                            res.statusCode = 401
                            res.send('Sin Autorización')
                        } else {
                            const token = getToken({ _id: userId})
                            const newRefreshToken = getRefreshToken({ _id: userId})
                            user.refreshToken[tokenIndex] = {refreshToken: newRefreshToken}
                            user.save((err, user) => {
                                if (err) {
                                    res.statusCode = 500
                                    res.send(err)
                                } else {
                                    res.cookie('refreshToken', newRefreshToken, COOKIE_OPTIONS)
                                    res.send({success: true, token})
                                }
                            })
                        }
                    } else {
                        res.statusCode = 401
                        res.send('Sin Autorización')
                    }
                }, 
                err => next(err)
            )
        } catch (e) {
            res.statusCode = 401
            res.send('Sin Autorización')
        }
    } else {
        res.statusCode = 401
        res.send('Sin Autorización')
    }
})

router.get('/me', verifyUser, (req, res) => {
    res.send(req.user)
})

router.get('/logout', verifyUser, (req, res, next) => {
    const { signedCookies = {}} = req
    const { refreshToken } = signedCookies
    User.findById(req.user._id).then(
        user => {
            const tokenIndex = user.refreshToken.findIndex(
                item => item.refreshToken === refreshToken
            )
            if (token === -1) {
                user.refreshToken.id(user.refreshToken[tokenIndex]._id).remove()
            }
            user.save((err, user) => {
                if (err) {
                    res.statusCode = 500
                    res.send(err)
                } else {
                    res.clearCookie('refreshToken', COOKIE_OPTIONS)
                    res.send({success: true})
                }
            })
        },
        err => next(err)
    )
})
module.exports = router