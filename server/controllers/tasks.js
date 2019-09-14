const Task = require('../models/task');

async function getAll (ctx) {
    const tasks = await Task.find({});
    ctx.body = tasks;
}

async function create (ctx) {
    const newTask = new Task(ctx.request.body);
    const savedTask = await newTask.save();
    ctx.body = savedTask;
}

async function update (ctx) {
    const id = ctx.params.id;
    const updates = ctx.request.body;
    const task = await Task.findById(id);
    task.title = updates.title;
    task.isCompleted = updates.isCompleted;
    const updatedTask = await task.save();
    ctx.body = updatedTask;
}

async function remove (ctx) {
    const id = ctx.params.id;
    const tasks = await Task.findById(id);
    const deletedTask = await tasks.remove();
    ctx.body = deletedTask; 
}

module.exports = {
    getAll,
    create,
    update,
    remove
}