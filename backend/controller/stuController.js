
const StuModels = require("../models/stuModels")
const DataSave = async (req, res) => {
    // console.log(req.body)
    const { imgname, rollno, name, city, fees } = req.body;
    await StuModels.create({
        rollno: rollno,
        name: name,
        city: city,
        fees, fees,
        imgname: imgname
    })

    res.send("okk")
}
const DataDisplay = async (req, res) => {
    const Data = await StuModels.find();
    res.send(Data)
}

module.exports = {
    DataSave,
    DataDisplay
}