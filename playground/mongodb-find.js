const { MongoClient, ObjectID } = require('mongodb');

var url = "mongodb://127.0.0.1:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect!');
    } console.log('Connected!');
    /*
    db.collection('Todos').find().toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data!', err);
    });
    */
    /*
    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data!', err);
    });
    */
    /*
    db.collection('Todos').find().count().then((count) => {
        console.log(count);
    }, (err) => {
        console.log('Unable to count data!', err);
    });
    */
    db.collection('Users').find({name: 'Tuan Anh Ha'}).toArray().then((user) => {
        console.log(JSON.stringify(user, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data!', err);
    });
});
