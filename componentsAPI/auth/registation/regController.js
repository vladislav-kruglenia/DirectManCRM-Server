const bcrypt = require('bcryptjs');
const UsersModel = require('../usersModel');

module.exports.saveUser = async (req, res) => {
    const candidate = await UsersModel.findOne({email: req.body.email});
    if(candidate){
        res.status(403).json({message:"User with such mail already exists"})
    } else {
        const user = new UsersModel({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        });
        try {
            await user.save();
            console.log("Сохранен объект", user);
            res.status(201).json({message: "User is registered"})
        } catch (e) {
            return console.log(e);
        }
    }
};

