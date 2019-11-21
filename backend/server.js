const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors =require('cors');
const PORT = 4000;
const mongoose = require('mongoose');

//Mongodb link to my database
const mongoDB = 'mongodb+srv://admin:admin@cluster0-7kbun.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser:true});
app.use(cors());

app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Schema
const Schema = mongoose.Schema;

const SchedulerSchema = new Schema({
    description: String,
    time: String,
    date: String,
    title: String
});

//Model- created based on schema
var schedulerModel = mongoose.model('scheduler',SchedulerSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//Gets all the objects in the database at the specified URL
app.get('/scheduler', (req, res) => {
    schedulerModel.find((error, data)=>{
        res.json({scheduler:data});
    })
})

//Get the object by id
app.get('/scheduler/:id', (req, res) => {
    console.log(req.params.id);

    schedulerModel.findById(req.params.id, (error, data) =>{
        res.json(data);
    })
})
//Delete method
app.delete('/scheduler/:id', function(req, res){
console.log(req.params.id);

schedulerModel.deleteOne({_id: req.params.id},
    function(err, data) {
        if(err)
            res.send(err);
        res.send(data);
    })
})

//Update method
app.put('/scheduler/:id', function (req, res) {
    console.log("Update Schedule " + req.params.id);
    console.log(req.body.title);
    console.log(req.body.date);
    console.log(req.body.time);
    console.log(req.body.description);
    schedulerModel.findByIdAndUpdate(req.params.id, req.body, {new: true},
    function(err, data){
    res.send(data);
    })
    })
    

    //Post is more secure,
app.post('/scheduler', (req, res) => {  
    console.log(req.body) ;

    schedulerModel.create({
        title:req.body.title,
        date:req.body.date,
        time:req.body.time,
        description:req.body.description
    });

    res.json('Data uploaded');

    })

    app.listen(PORT, function(){
        console.log("Server is running on Port: " + PORT);
    });