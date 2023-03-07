//var express = require("express");
//var router = express.Router();

//router.get("/", function(req, res, next) {
    //res.send("API is working properly");
//});
const express = require('express');
const router = express.Router();
const quotes = require('../services/quotes');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(quotes.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting quotes `, err.message);
    next(err);
  }
});

/* POST quote */
router.post('/', function(req, res, next) {
  try {
    res.json(quotes.create(req.body));
  } catch(err) {
    console.error(`Error while adding quotes `, err.message);
    next(err);
  }
});
//delete
router.delete('/', function(req, res, next) {
  try {
    res.json(quotes.delete(req.body));
  } catch(err) {
    console.error(`Error while adding quotes `, err.message);
    next(err);
  }
});
//put
router.put('/', function(req, res, next) {
  try {
    res.json(quotes.update(req.body));
  } catch(err) {
    console.error(`Error while adding quotes `, err.message);
    next(err);
  }
});

module.exports = router;
