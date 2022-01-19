const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    id : {
        type: String,
        required : true,
        unique: true
    },
    name: {
        type: String,
    },
    state: {
        type: String
    }
});

const cityModel = mongoose.model('cities', citySchema);

module.exports = cityModel;