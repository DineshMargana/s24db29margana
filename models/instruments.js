const mongoose = require("mongoose")
const instrumentsSchema = mongoose.Schema({
Instruments_type: String,
Brand: String,
price: Number
})
module.exports = mongoose.model("instruments",
instrumentsSchema)