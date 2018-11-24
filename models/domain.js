const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Enterprise Schema
const domainSchema = new Schema({
  name: String,
  image: String
},
{
  versionKey: false
});

module.exports = Domain = mongoose.model('domain', domainSchema);