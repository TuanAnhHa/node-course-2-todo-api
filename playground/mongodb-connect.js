// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
var url = "mongodb://127.0.0.1:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect!');
    } console.log('Connected!');

    // db.collection('Todos').insertOne({
    //     text: 'Cook lunch',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert!', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Ba Phuc Ha',
    //     age: 58,
    //     location: 'Hanoi'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert!', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });



    db.close();
});
