var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    body: String,
    title: String,
    posted: Date
})

mongoose.model('Question', QuestionSchema);