const express = require('express');

const ctrl = require('../../controllers');

const router = express.Router();
 
router.get('/', ctrl.getAll);

router.post('/', ctrl.addTask);


module.exports = router;
