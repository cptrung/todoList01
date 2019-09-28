const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:String,
    level:String
});

const task = mongoose.model('tasks',taskSchema);

module.exports =  task;