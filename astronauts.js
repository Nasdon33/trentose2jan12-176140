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
        const newAstronaut = req.body;
        newAstronaut.astronautID = uuid();
        newAstronaut.lastModified = new Date();
        db.push("/database/data[]", newAstronaut);
        res.json(newAstronaut);
    })
    .get(function(req, res){
        // Visualizzare tutti o alcuni astronauti
        var Astronauts = [];
        var i = 0;
        if(req.query.lastName)
        {
            while(true)
            {
                var data;
                try
                {
                    data = db.getData("/database/data[" + i + "]");
                }
                catch(error)
                {
                    break;
                }
                if(data.lastName === req.query.lastName)
                    Astronauts.push(data);
                i++;
            }
        }
        else{
            while(true)
            {
                var data;
                try
                {
                    data = db.getData("/database/data[" + i + "]");
                }
                catch(error)
                {
                    break;
                }
                Astronauts.push(data);
                i++;
            }
        }
        res.json(Astronauts);
    });


astronauts.route('/:astronautID')
    .get(function(req, res) {
        // Visualizzare un astronauta con ID in input
        const id = req.params.astronautID;
        var i = 0;
        while(true)
        {
            var data;
            try
            {
                data = db.getData("/database/data[" + i + "]");
            }
            catch(error)
            {
                res.sendStatus(404);
                break;
            }
            if (data.astronautID === id)
            {
                res.status(200).json(data);
                break;
            }
            i++;
        }
    })
    .post(function(req, res) {
        // Modificare un astronauta con ID in input
    });

module.exports = astronauts;