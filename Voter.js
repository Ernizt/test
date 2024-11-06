const mongoose = require('mongoose');

const VoterSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Voter', VoterSchema);