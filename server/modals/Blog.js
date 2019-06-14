const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
    id: Number,
    title: String,
    content: String
});

mongoose.model('blogs', blogsSchema);