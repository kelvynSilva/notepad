const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    notes: { type: String, required: true },
    priority: { type: Boolean, default: false }
});

module.exports = mongoose.model('Annotations', AnnotationDataSchema);