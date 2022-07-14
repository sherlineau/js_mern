const express = require("express");
const app = express();
const port = 8000

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//! express configure -> two lines important for post method
// needed for when we want to create something
app.use ( express.json() )
// used to recognize JSON Object
app.use( express.urlencoded({ extended: true }) );
// used to recognize the incoming request object is a string or array

//! FULL CRUD needed
// read -- GET all
// takes two parameters -> (path, function[logic](request, response))
// /api/ = backend
app.get("/api/users", (req, res)=> {
    // request - req : what is received from this call
    // response - res : what should be sent out
    // res.json({status:"ok", users})
    // axios.get .. response want status -> res.data.status
    // axios.get .. response want users -> res.data.users

    res.json(users)
})

// READ one - get one item
app.get("/api/users/:id", (req,res) => {
    // gets the params from route parama
    // const idFromParams = req.params.id
    // res.json(users[idFromParams])
    res.json(users[req.params.id])
})

// create -- POST
app.post("/api/users", (req,res) => {
    // request body is what the user is submitting to backend
    // adds object from post to users array
    users.push(req.body)
    // sends what is submitted back to user on post 
    res.json(req.body)
})

// update -- PUT/PATCH ( read one + create)
// 1. get specific with params
// 2. update info with req.body
app.put("/api/users/:id", (req, res) => {
    const id = req.params.id
    users[id] = req.body
    res.json(users[id])
})

// delete -- DELETE
app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id
    users.splice(id, 1)
    res.json(users)
})

//  two paramters : port , callback function
app.listen( port, ()=>console.log("listening to port: 8000") )