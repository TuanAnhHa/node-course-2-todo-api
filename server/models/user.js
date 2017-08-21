var mongoose = require('mongoose'); // add the mongoose library

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
})

// var userTwo = new User({
//     email: 'hhnam89@gmail.com'
// });
//
// userTwo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log(e);
// });

module.exports = {
    User
}
