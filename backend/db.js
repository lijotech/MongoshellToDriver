const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const mongoUrl = 'mongodb+srv://lijomongo:admin@cluster0.ob04tyz.mongodb.net/shop?retryWrites=true&w=majority';

let _db;

const initDB = callback => {
    if (_db) {
        console.log('Database already initialised.');
        return callback(null, _db);
    }
    mongoClient.connect(mongoUrl)
        .then(client => {
            _db = client;
            callback(null, _db);
        })
        .catch(err => {
            callback(err);

        })
};

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialised');
    }
    return _db;
};

module.exports = {
    initDB,
    getDb
};