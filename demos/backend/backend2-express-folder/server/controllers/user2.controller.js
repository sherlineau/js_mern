// 2nd way to export functions

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" },
];

// one module.exports object with all the functions
// key is function name
// value is the function logic
module.exports = {
    allUsers : (req, res) => {
        res.json(users)
    },
    oneUser: (req, res) => {
        res.json(users[req.params.id]);
    },
    createUser : (req, res) => {
        users.push(req.body);
        res.json(req.body);
    }, 
    updateUser : (req, res) => {
        const id = req.params.id;
        users[id] = req.body;
        res.json(users[id]);
    },
    deleteUser: (req, res) => {
        const id = req.params.id
        users.splice(id, 1)
        res.json(users)
    }
}
