const bcrypt = require('bcryptjs');
const UserModel = require('../usersModel');
const tokensGeneration = require('./../tokensGeneration').tokensGeneration;


module.exports.logController = async (req, res) => {
    const user = await UserModel.findOne({email: req.body.email});
    if (user) {
        //Сравнение паролей
        const passwordResult = bcrypt.compareSync(req.body.password, user.password);
        if (passwordResult) {
            // Создание и отправка новых токенов клиенту
            tokensGeneration(res, user);
        } else {
            // Неверный пароль
            errorStatus(res, 401, "Passwords do not match.");
        }
    } else {
        // Нет в базе пользователя с такой почтой
        errorStatus(res, 404, "This user is not registered");
    }
};

let errorStatus = (res, statusCode, message) => {
    return res.status(statusCode).json({
        message: message,
        isAuth: false
    })
};

