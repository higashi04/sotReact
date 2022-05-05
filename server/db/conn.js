const {MongoClient} = require('mongodb')
const Db = 'mongodb://localhost:27017/trasn-vill'
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

var _db;

module.exports = {
    connectToServer: function(callback) {
        client.connect(function(err, db) {
            if (db) {
                _db = db.db('trasn-vill')
                console.log('Database is working, bro')
            }
            return callback(err)
        })
    },
    getDb: () => {
        return _db
    }
}