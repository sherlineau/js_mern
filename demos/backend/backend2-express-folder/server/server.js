const express = require("express");
const app = express();
const port = 8000

// express configure -> two lines important for post method
app.use ( express.json() )
app.use( express.urlencoded({ extended: true }) );

// need to be AFTER .use
const Routes = require('./routes/user.routes')
Routes(app)

app.listen( port, ()=>console.log("listening to port: 8000") )