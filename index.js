import express from 'express';
import data from './db/db';

// Set up the express app
const app = express();

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const cors = require('cors')

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId;
var db;
// app.use(function (req, res, next) {
//     res.set({
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     });
//     next();
// });

MongoClient.connect('mongodb://localhost:27017/mongodemo', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) throw err

    db = client.db('mongodemo')
})

// get all todos
app.get('/users/all', (req, response) => {

    response.status(200).send({
        data
    });
})

app.get('/user/all', (req, response) => {

    db.collection("angular_user").find().toArray(function (err, result) {
        response.status(200).send({
            result
        });
    })

})
app.get("/user/:id", (req, res) => {
    console.log("id::: ", req.params.id);
    let query = { _id: ObjectId(req.params.id) };
    db.collection("angular_user").findOne(query, (err, user) => {
        console.log(user);
        res.send(user);
    });
})

app.post("/user/add", (req, res) => {

    console.log("under save user ", req.body)
    db.collection('angular_user').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('saved to database')
        res.status(201).send({ msg: 'user added success' });
    })

});

app.put("/user/update/:id", (req, res) => {

    console.log("under update user ", req.body)
    let query = { _id: ObjectId(req.params.id) };
    let obj = req.body;
    let parsed_obj = { name: obj.name, age: obj.age, city: obj.city, email: obj.email }
    let update_data = { $set: parsed_obj };
    let new_doc = { returnNewDocument: true };
    db.collection('angular_user').findOneAndUpdate(query, update_data, new_doc, (err, user) => {
        if (err) return console.log(err)
        console.log('updated to database')
        res.status(200).send(user);
    })

});

app.get('/all', (req, response) => {
    db.collection('testdata').find().toArray(function (err, result) {
        console.log(result)
        response.status(200).send({
            result
        })
    })

});


app.get('/users/all', (req, response) => {

    db.collection('testdata').find().toArray(function (err, result) {
        console.log(result)
        response.status(200).send({
            result
        })
    })

});

app.get('/create', (req, res) => {
    let dataa = { name: 'sagarisha', msg: 'user is created at ' + new Date(), createdAt: new Date() }
    db.collection('testdata').insertOne(dataa, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/all')
    })
})

app.delete("/user/delete/:id", (req, res) => {
    console.log("id::: ", req.params.id);
    let query = { _id: ObjectId(req.params.id) };
    db.collection("angular_user").findOneAndDelete(query, (err, user) => {
        console.log(user);
        res.send(user);
    });
})



const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});