var express      = require('express');
var bodyParser   = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo }     = require('./models/todo');
var { User }     = require('./models/user');

const { ObjectID } = require('mongodb');

var app          = express();

app.use(bodyParser.json()); // middleware

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    } else {
        Todo.findById(id).then((todo) => {
            if(!todo){
                return res.status(404).send();
            }
            res.send({todo});
        }).catch((e) => {
            res.status(400).send();
        });
    }
});

app.post('/todos', (req, res) => {
    // console.log(req.body);
    var todo = new Todo ({
        text: req.body.text // get data from the users
    });

    todo.save().then((doc) => { // save the data
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Starting on port 3000...');
});

module.exports = {
    app
};
