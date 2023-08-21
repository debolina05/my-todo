const express = require('express');
const todoController = require('../controllers/todo');
const router = express.Router();


//form add and post data
router.get('/',todoController.getData);
router.post('/',todoController.postData);
router.post('/wrong/:id', todoController.deletedata);
router.post('/right/:id', todoController.right);


//404
router.get('*',todoController.errorPage);

module.exports = router;