const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  voterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Voter' },
  candidateIds: [String], // Сохраняем идентификаторы кандидатов
});

module.exports = mongoose.model('Vote', VoteSchema);