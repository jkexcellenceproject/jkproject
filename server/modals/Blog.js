const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
    id: Number,
    title: String,
    content: String,
    dateSent: Date
});

mongoose.model('blogs', blogsSchema);