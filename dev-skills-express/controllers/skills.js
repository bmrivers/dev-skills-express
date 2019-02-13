/// gets the Skill model
var Skill = require('../models/skill');

// Exports Controller function
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    delete: deleteSkill,
    update
};

function update(req, res) {
    console.log(req.body);
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
  }
  

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function edit(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {
        skill,
        id: req.params.id
    });
}

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

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
  }

  function newSkill(req, res) {
    res.render('skills/new');
  }

