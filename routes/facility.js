const express = require('express');
const router = express.Router();

const fs = require('fs');

// read data from json file
let data_string = fs.readFileSync('./data/data_sample_1.json', encoding='utf8');

// parse to json array
let data_json = JSON.parse(data_string);

console.log(data_json);

/* GET users listing. */
router.get('/', function(req, res) {
    res.send({data: data_json});
});

module.exports = router;