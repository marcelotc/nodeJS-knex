const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
    db.select().from('todo').then(function(data){
        res.send(data);
    });
    //select * from "todo"
});

module.exports = router;
