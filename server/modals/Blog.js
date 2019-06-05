const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogsSchema = new Schema({
    id: Number,
    name: String
});

mongoose.model('blogs', blogsSchema);