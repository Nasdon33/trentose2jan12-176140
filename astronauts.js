var express = require('express');
var bodyParser = require('body-parser');
var JsonDB = require('node-json-db');
const astronauts = express.Router();

var uuid = require('uuid/v4');

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
        const id = req.params.astronautID;
        var i = 0;
        while(true)
        {
            var data;
            try {
                data = db.getData("/database/data[" + i + "]");
            }
            catch(error)
            {
                res.sendStatus(404);
                break;
            }
            if(data.astronautID === id){
                data = req.body
                data.astronautID = id;
                data.lastModified = new Date();
                db.push("/database/data[" + i + "]", data);
                //res.statusCode =  200;
                res.status(200).json(data);
                break;
            }
            i++;
        }
    });

module.exports = astronauts;