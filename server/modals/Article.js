const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
    id: Number,
    title: String,
    content: String,
    dateSent: Date
});

mongoose.model('articles', articleSchema);