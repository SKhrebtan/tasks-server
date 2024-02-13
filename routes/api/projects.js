const express = require('express');

const { ctrlProjects} = require('../../controllers');

const router = express.Router();
 
router.get('/', ctrlProjects.getAllProjects);

router.post('/', ctrlProjects.addProject);


module.exports = router;
