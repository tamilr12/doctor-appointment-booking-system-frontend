const mongoose = require('mongoose')
const bothSchema = new mongoose.Schema({
    patientname:String,
    patientage:String,
    patientgender:String,
    patientnumber:String,
    userid:String,
    docid:String,
    docname:String,
    docprofession:String,
    timeslot:String,
})
const BothModel = mongoose.model("both",bothSchema)
module.exports = BothModel