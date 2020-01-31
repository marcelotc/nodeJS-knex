const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
    db.select().from('todo').orderBy('id').then(function (data) {
        res.send(data);
    });
    //select * from "todo"
});

router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('todo').then(function (data) {
        res.send(data);
    });
    // select * from tablename(column1, column2) values(column_value, column2_value);
    //select * from table where id = inserted_row;
});

router.patch('/:id', function (req, res) {
    db('todo').where({ id: req.params.id }).update(req.body).returning('*').then(function (data) {
        res.send(data);
    });
});

router.put('/:id', function (req, res) {
    db('todo').where({ id: req.params.id }).update({
        title: req.body.title || null,
        is_done: req.body.is_done || null
    }).returning('*').then(function (data) {
        res.send(data);
    });
});

router.delete('/:id', function (req, res) {
    db('todo').where({ id: req.params.id }).del().then(function () {
        res.json({ success: true });
    });
});


router.get('/:id', function (req, res) {
    db('todo').where({ id: req.params.id }).select().then(function (data) {
        res.send(data);
    });
});

module.exports = router;
