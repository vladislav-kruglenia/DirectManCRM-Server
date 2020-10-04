const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../usersModel');
const key = require('./../../../config/keys');


module.exports.logController = async (req, res) => {
    const candidate = await UserModel.findOne({email: req.body.email});
    if (candidate) {
        //Сравнение паролей
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            // Генерация токена
            console.log(candidate._id);
            const token = jwt.sign({
                email: req.body.email,
                userId: candidate._id
            }, key.jwt, {expiresIn: 3600});
            res.status(200).json({
                token: `Bearer ${token}`,
                message: "Token created"})
        } else {
            // Неверный пароль
            res.status(401).json({message: "Passwords do not match."})
        }
    } else {
        // Нет в базе пользователя с такой почтой
        res.status(404).json({message: "This user is not registered"})
    }
};


