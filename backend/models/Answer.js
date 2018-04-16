var mongoose = require('mongoose');

var AnswerSchema = mongoose.Schema({
    body: String,
    posted: Date
})

AnswerSchema.pre('remove', function (next) {
    this.model('Question').update({}, 
      { $pull: { answers: this._id } }, 
      { safe: true, multi: true }, next);
  })
mongoose.model('Answer', AnswerSchema);