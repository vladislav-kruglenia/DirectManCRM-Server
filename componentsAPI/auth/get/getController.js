const UserModel = require('./../usersModel');

module.exports.getUsers = async (req, res) => {
    const candidate = await UserModel.find();
    res.json(candidate);
};

