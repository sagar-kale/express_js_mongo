import data from '../db/fakeapi';
export function getFakeData(req, res) {
    res.status(200).send(data);
}