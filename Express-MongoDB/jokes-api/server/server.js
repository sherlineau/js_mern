const express = require("express")
const app = express()
const port = 8000
module.exports = DATABASE = 'jokes_db'

require('./configs/mongoose.config')
app.use( express.json() )
app.use( express.urlencoded({ extended: true }) )

const Routes = require('./routes/jokes.routes')
Routes(app)

app.listen(port,()=>console.log(`Listening to port: ${port}`))