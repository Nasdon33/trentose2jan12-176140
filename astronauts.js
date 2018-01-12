var express = require('express');
var bodyParser = require('body-parser');
var JsonDB = require('node-json-db');
const astronauts = express.Router();

var db = new JsonDB("json/db.json", true, false);



// Mandare il proprio assignment
astronauts.route('/')
    .post(function(req,res){
        // Creare un astronauta
    })
    .get(function(req, res){
        // Visualizzare tutti o alcuni astronauti
    });


astronauts.route('/:astronautID')
    .get(function(req, res) {
        // Visualizzare un astronauta con ID in input
    })
    .post(function(req, res) {
        // Modificare un astronauta con ID in input
    });

module.exports = astronauts;