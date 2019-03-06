import mongoose from 'mongoose';
import User from '../models/user';
import chalk from 'chalk';
logg
export function createUser(req, res) {
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        city: req.body.city
    });
    user.save().then((newUser) => {
        res.status(200).send(newUser);
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'server error , please try again',
            error: err.message
        })
    });

}
export function findAll(req, res) {
    User.find().then(users => {
        return res.status(200).send(users);
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'server error , please try again',
            error: err.message
        });
    });
}
export function findUserById(req, res) {
    User.findById(req.params.id, function (err, user) {
        res.status(200).send(user);
    });
}
export function updateUser(req, res) {
    console.log(chalk.magentaBright("under update user api ::: "), req.body);
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => {
            return res.status(200).send(user);
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: `error occured while updating record for  ${req.params.id} id`,
                error: err.message
            });
        });
}
export function deleteUser(req, res) {
    console.log(chalk.redBright("deleting user from collection ::: " + req.params.id));
    User.findByIdAndDelete(req.params.id).exec()
        .then(user => {
            return res.status(200).send(user);
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: `error occured while deleting ${req.params.id} from db`,
                error: err.message
            })
        });
}