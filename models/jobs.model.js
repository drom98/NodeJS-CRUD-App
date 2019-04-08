const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jobSchema = new Schema({
  title: {
    type: String, required: true, max: 100
  },
  company: {
    type: String, required: true, max: 100
  }
});

module.exports = mongoose.model('jobSchema', jobSchema);