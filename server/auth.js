const passport = require('passport')
const jwt = require('jsonwebtoken')
const dev = process.env.NODE_ENV !== 'production'

exports.COOKIE_OPTIONS = {
    httpOnly: true,
    secure: !dev,
    signed: true,
    maxAge: eval(60 * 60 * 24 * 30) * 1000,
    sameSite: 'none',
}

exports.getToken = user => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: eval(60 * 15)
    })
}

exports.getRefreshToken = user => {
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: eval(60 * 60 * 24 * 30)
    })
    return refreshToken
}

exports.verifyUser = passport.authenticate('jwt', {session: false})