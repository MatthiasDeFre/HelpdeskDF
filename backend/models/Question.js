var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
    poster: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    body: String,
    title: String,
    posted: Date,
    answers: [{type: mongoose.Schema.Types.ObjectId, ref: "Answer"}]
   
})

mongoose.model('Question', QuestionSchema);