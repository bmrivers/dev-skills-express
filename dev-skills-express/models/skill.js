const skills = [
    {skill: 'HTML', level: 4},
    {skill: 'CSS', level: 3},
    {skill: 'Javascript', level: 3},
    {skill: 'Node.js', level: 1},
];

module.exports = {
    getAll, 
    getOne,
    create,
    deleteOne,
    update
}

function update(id, skill) {
    skills[id] = skill;
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

