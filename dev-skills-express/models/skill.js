const skills = [
    {skill: 'HTML', level: 4},
    {skill: 'CSS', level: 3},
    {skill: 'Javascript', level: 3},
    {skill: 'Node.js', level: 1},
];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

module.exports = {
    getAll, 
    getOne,
}