// import dependencies
const express = require('express');
const cors = require('cors');
const app = express();

// configs
require('./server/config/mongoose.config');
app.use(cors());
app.use( express.json() );
app.use ( express.urlencoded( {extended: true}));

// routes
require('./server/routes/person.routes')(app);

// Listen
app.listen(8000, () => { console.log("Listening at Port 8000") });