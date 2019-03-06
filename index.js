import express from 'express';
import db from './app/db/dbconfig';
import properties from './app/db/properties';
import mainRoutes from './app/routes/routes.main';
import logger from 'morgan';

// Set up the express app
const app = express();

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}
db();
app.use(cors(corsOptions));
app.use(logger('combined'))
app.use('/api/', mainRoutes);

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})