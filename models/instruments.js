const mongoose = require("mongoose")
const instrumentsSchema = mongoose.Schema({
instrument_type: String,
brand: String,
price: Number
})
module.exports = mongoose.model("instruments",
instrumentsSchema)