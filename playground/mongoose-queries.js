const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo }     = require('../server/models/todo');
const { User }     = require('../server/models/user');

// var id = '599f1e943d878f01dc55b5dehta';
var userID = '5999b91e27328902e8da4d3a';
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// if(!ObjectID.isValid(id)){
//     console.log('Invalid ID');
// } else {
//     Todo.findById(id).then((todo) => {
//         if(!todo){
//             console.log('ID not found!');
//         }
//         console.log('Todo', todo);
//     }).catch((e) => console.log(e));
// }

if(!ObjectID.isValid(userID)){
    console.log('Invalid User ID!');
} else {
    User.findById(userID).then((user) => {
        if(!user){
            console.log('User not found!');
        }
        console.log('Found User:', user);
    }).catch((e) => console.log(e));
}
