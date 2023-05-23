const mongoose = require('mongoose');

const dbConfig = process.env.MONGO_DB;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});