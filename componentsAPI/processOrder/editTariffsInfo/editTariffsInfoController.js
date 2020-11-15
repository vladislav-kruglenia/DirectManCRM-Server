const TariffsInfoModel = require('./../tariffsInfoModel');

module.exports.editTariffsInfo = async (req, res) => {
    const ID = "INDEX_GLOBAL_TARIFF_INFO";
    try {
        let tariffsInfo = await TariffsInfoModel.findOne({ID});
        if (tariffsInfo) {
            tariffsInfo.directionsAndTariffs = req.body.directionsAndTariffs;
        } else {
            tariffsInfo = new TariffsInfoModel({
                ID,
                directionsAndTariffs: req.body.directionsAndTariffs,
            })
        }
        tariffsInfo.save();
        res.status(202).json({message: "Tariffs information saved."})
    } catch (e) {
        console.log(e);
        res.status(404).json({message: "Server error."})
    }
};

