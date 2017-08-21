var mongoose = require('mongoose');
var url      = "mongodb://127.0.0.1:27017/TodoApp";

mongoose.Promise = global.Promise;

mongoose.connect(url, { useMongoClient: true }); // create connection to the Mongodb

module.exports = {
    mongoose
}
