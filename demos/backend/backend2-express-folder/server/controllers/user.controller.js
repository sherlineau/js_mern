const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" },
];

// module.exports.functionName = ( request, response )
module.exports.allUsers = (req, res) => {
    res.json(users);
};

module.exports.oneUser = (req, res) => {
    res.json(users[req.params.id]);
};

module.exports.createUser = (req, res) => {
    users.push(req.body);
    res.json(req.body);
};

module.exports.updateUser = (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json(users[id]);
};

module.exports.deleteUser = (req, res) => {
    const id = req.params.id
    users.splice(id, 1)
    res.json(users)
}
