var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');


mongoose.connect('mongodb://localhost:27017/time-waste');

app.use(bodyParser.json());
app.use(multipartMiddleware);
app.use('/app', express.static(__dirname + "/app" ));
app.use('/node_modules', express.static(__dirname + "/node_modules"));




app.get('/', function(req, res){
    res.sendfile('index.html');
});

//Authentication
app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);

//Profile


//User
app.get('/api/users/get', usersController.getUsers);


app.listen('3000', function (){
    console.log("Listening for Local Host 3000");
});