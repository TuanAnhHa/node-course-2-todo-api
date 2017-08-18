const { MongoClient, ObjectID } = require('mongodb');

var url = "mongodb://127.0.0.1:27017/TodoApp";

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log('Unable to connect!');
    } console.log('Connected!');

    // db.collection('Todos').deleteMany({text: 'Eat dinner'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Call mother'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({age: 24}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteOne({_id: new ObjectID('599600f1138d8994986bcbb9')}).then((result) => {
        console.log(result);
    });
});
