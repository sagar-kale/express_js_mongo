import express from 'express';
import db from './app/db/dbconfig';
import properties from './app/db/properties';
import mainRoutes from './app/routes/routes.main';
import logger from 'morgan';
import jwt from 'jsonwebtoken';
import config from './app/db/properties'
import middleware from './app/config/middleware'

//let jwt = require('jsonwebtoken');
//let config = require('./config');
//let middleware = require('./middleware');

class HandlerGenerator {
    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;
        console.log("username :: ", username);
        console.log("password :: ", password);
        // For the given username fetch user from DB
        let mockedUsername = 'admin';
        let mockedPassword = 'password';

        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({ username: username },
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                // return the JWT token for the future API calls
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    token: token
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: 'Incorrect username or password'

                });
            }
        } else {
            res.status(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }
    }
    index(req, res) {
        res.json({
            success: true,
            message: 'Index page'
        });
    }
}

// Set up the express app
// Starting point of the server
function main() {
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
    let handlers = new HandlerGenerator();
    app.post('/login', handlers.login);
    //app.get('/', , handlers.index);
    app.use(cors(corsOptions));
    app.use(logger('combined'))
    app.use('/api/', middleware.checkToken, mainRoutes);

    app.listen(properties.PORT, (req, res) => {
        console.log(`Server is running on ${properties.PORT} port.`);
    })
}
main();