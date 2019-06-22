import mongoose from 'mongoose';
import Chat from '../models/chat';
import chalk from 'chalk';
export function createChat(req, res) {
    const chat = new Chat({
        _id: mongoose.Types.ObjectId(),
        fname: req.body.fname,
        lname: req.body.lname,
        content: req.body.content,
    });
    chat.save().then((newChat) => {
        res.status(200).send(newChat);
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'server error , please try again',
            error: err.message
        })
    });

}
export function findAll(req, res) {
    chat.find().then(chats => {
        return res.status(200).send(chats);
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'server error , please try again',
            error: err.message
        });
    });
}
export function findChatById(req, res) {
    Chat.findById(req.params.id, function (err, chat) {
        res.status(200).send(chat);
    });
}
export function updateChat(req, res) {
    console.log(chalk.magentaBright("under update Chat api ::: "), req.body);
    Chat.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(chat => {
            return res.status(200).send(chat);
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: `error occured while updating record for  ${req.params.id} id`,
                error: err.message
            });
        });
}
export function deleteChat(req, res) {
    console.log(chalk.redBright("deleting Chat from collection ::: " + req.params.id));
    Chat.findByIdAndDelete(req.params.id).exec()
        .then(chat => {
            return res.status(200).send(chat);
        }).catch(err => {
            res.status(500).json({
                success: false,
                message: `error occured while deleting ${req.params.id} from db`,
                error: err.message
            })
        });
}