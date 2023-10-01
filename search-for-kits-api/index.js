const express = require('express');
const mongoose = require('mongoose');
const KitModel = require('./schema.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/biobot-kits', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        });
        console.log("mongoose connection successful");
    } catch (e) {
        console.log(e);
    }
};

connectToMongoDB();

app.use(bodyParser.json());
app.use(cors());

app.post('/get-kit-info', async (request, response) => {
    try {
        const label_id = request.body.label_id;
        const regexPattern = new RegExp(`^${label_id}`);

        const data = await KitModel.find({ label_id: regexPattern }).limit(5);

        response.json(data);
    } catch (e) {
        console.error(e);
        response.status(500).json({ error: 'Server error' });
    }
});

app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});