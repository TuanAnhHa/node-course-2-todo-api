var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', { // create a Model
    text: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: '   Edit this video and post it   ',
//     completed: false,
//     completedAt: 98765
// });
//
// newTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save tasks!');
// });

module.exports = {
    Todo
};
