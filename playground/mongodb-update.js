const { MongoClient, ObjectID } = require('mongodb');

var url = "mongodb://127.0.0.1:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect!');
    } console.log('Connected!');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('59944b56cbbb7559c97e9390')
        }, {
        $set: {
            completed: true
            }
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5994437e50135901bd08081e')
        }, {
        $inc: {
            age: 1
            }
        }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result);
    });
});
