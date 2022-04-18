const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true, // beğeni eklenebilir
    },
    editorName: {
        type: String,
        required: true
    }
}, { collection: 'contents' })

const Content = mongoose.model('contents', contentSchema);

module.exports = Content;