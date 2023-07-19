require('dotenv').config()
require('./config/mongoose.config')

const cors = require('cors')
const express = require('express');

const app = express();
const port = process.env.PORT;

// use all in one line:
app.use(express.json(), express.urlencoded({extended: true}), cors())

// user model and routes moved to different files
const routeAttacher = require('./routes/team.routes')
routeAttacher(app)

app.listen(port, () => console.log(`>>Server online! Listening to ${port}`));
