/// gets the Todo model
var Skill = require('../models/skill');

// Exports Controller function
module.exports = {
    index,
    show
};


function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    });
}

// Controller function or "action"
function index(req, res, next) {
    res.render('skills/index', {
        title: 'My Dev Skills',
        skills: Skill.getAll()
    });
}