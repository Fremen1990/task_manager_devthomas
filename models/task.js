const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'you have to provide task name'],
        trim: true,
        minlength: [3, 'Task name cannot be shorter than 3 characters'],
        maxlength: [32, 'Task name cannot be more than 32 characters'],
    },
    completed: {
        type: Boolean,
        default: false
    },
}); //TODO

module.exports = mongoose.model('Task', TaskSchema)