const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String },
    isCompleted: { type: Boolean }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = mongoose.model('Task');