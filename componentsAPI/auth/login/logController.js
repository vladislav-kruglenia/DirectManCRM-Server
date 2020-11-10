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
            const accessToken = createToken(req.body.email, candidate._id, key.jwt, 3600);
            const refreshToken = createToken(req.body.email, candidate._id, key.jwt, 6200);
            res.cookie('jwt', refreshToken);
            res.status(200).json({
                token: `Bearer ${accessToken}`,
                message: "Token created"
            });
        } else {
            // Неверный пароль
            res.status(401).json({message: "Passwords do not match."})
        }
    } else {
        // Нет в базе пользователя с такой почтой
        res.status(404).json({message: "This user is not registered"})
    }
};

let createToken = (email, userId, keyJwt, expiresIn) => {
    return jwt.sign({
        email: email,
        userId: userId
    }, keyJwt, {expiresIn: expiresIn})
};


