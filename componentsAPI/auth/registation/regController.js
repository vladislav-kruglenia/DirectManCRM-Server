const bcrypt = require('bcryptjs');
const UserModel = require('../usersModel');
const { v4: uuidv4 } = require('uuid');


module.exports.saveUser = async (req, res) => {
    const candidate = await UserModel.findOne({email: req.body.email});
    if(candidate){
        res.status(403).json({message:"User with such mail already exists"})
    } else {
        const user = new UserModel({
            userId: uuidv4(),
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

