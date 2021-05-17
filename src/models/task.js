const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    desription: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task;

