const mongoose = require('mongoose')
const dailySchema = new mongoose.Schema({
    dayname:String,
    date:String,
    unique: Boolean,
   
})
const DailyModel = mongoose.model("dailytask",dailySchema)
module.exports = DailyModel