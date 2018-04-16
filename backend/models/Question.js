var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    body: String,
    title: String,
    posted: Date,
    answers: [{type: mongoose.Schema.Types.ObjectId, ref: "Answer"}]
})

mongoose.model('Question', QuestionSchema);