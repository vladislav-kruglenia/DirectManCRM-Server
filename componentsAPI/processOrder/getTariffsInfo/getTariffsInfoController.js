const TariffsInfoModel = require('./../tariffsInfoModel');

module.exports.getTariffsInfo = async (req, res) => {
    const ID = "INDEX_GLOBAL_TARIFF_INFO";
    try {
        let tariffsInfo = await TariffsInfoModel.findOne({ID});
        if (tariffsInfo) {
            res.status(202).json({
                message: "Tariffs information sent.",
                tariffsInfo: tariffsInfo.directionsAndTariffs
            })
        } else {
            res.status(404).json({message: "Server error."})
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({message: "Server error."})
    }
};

