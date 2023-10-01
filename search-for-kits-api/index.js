const express = require('express');
const mongoose = require('mongoose');
const KitModel = require('./schema.js');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/biobot-kits');

app.post('/get-kit-info', async(request, response) => {
    try {
        const label_id = request.body.label_id;
        const data = await KitModel.find({label_id});     
        response.json(data);
    } catch (e) {
        console.error(e);
        response.status(500).json({error: 'Server error'});
    }
});

app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});