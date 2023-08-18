const express = require('express');
const todoController = require('../controllers/todo');
const router = express.Router();


//form add and post data
router.get('/',todoController.getData);
router.post('/',todoController.postData);
router.post('/delete/:id', todoController.deleteData);


//404
router.get('*',todoController.errorPage);

module.exports = router;