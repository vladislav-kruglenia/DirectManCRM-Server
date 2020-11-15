const OrderModel = require('./../ordersModel');

module.exports.saveOrderInfo = async (req, res) => {
    let userId = req.body.userId;
    try {
        let order = await OrderModel.findOne({userId});
        if (order) {
            order.nameProject = req.body.nameProject;
            order.directionsAndTariffs = req.body.directionsAndTariffs;
        } else {
            order = new OrderModel({
                userId: req.body.userId,
                nameProject: req.body.nameProject,
                directionsAndTariffs: req.body.directionsAndTariffs,
            })
        }
        order.save();
        res.status(202).json({message: "Order information saved."})
    } catch (e) {
        console.log(e);
        res.status(404).json({message: "Server error."})
    }
};

