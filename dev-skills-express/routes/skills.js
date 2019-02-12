var express = require('express');
var router = express.Router()
var Skill = require('../models/skill');
var skillsCtrl = require('../controllers/skills')


/* GET users listing. aka todos index  */
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;