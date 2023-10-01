const mongoose = require('mongoose');

const kitSchema = new mongoose.Schema({
    id: Number,
    label_id: String,
    shipping_tracking_code: String
});

KitModel = mongoose.model('kits', kitSchema);

module.exports = KitModel;