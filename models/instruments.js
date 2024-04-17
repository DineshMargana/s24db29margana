const mongoose = require("mongoose")
const instrumentsSchema = mongoose.Schema({
    instrument_type: {
        type: String,
        minlength: 2,
        maxlength: 14,

    },
    brand:{
        type: String,
        minlength: 2,
        maxlength: 14,

    },
    price: Number
})
module.exports = mongoose.model("instruments",
    instrumentsSchema)