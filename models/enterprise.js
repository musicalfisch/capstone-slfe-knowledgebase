const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Enterprise Schema
const entSchema = new Schema({
  ID: Number,
  Name: String,
  Organization: String,
  "Responsible Organization": String,
  "Short Description": String,
  "General Description": String,
  "Solution Type": String,
  "Primary Domain": String,
  "Secondary Domain": String,
  "Organizational Entity Type": String,
  "Keyword Descriptors": String,
  Location: String,
  "Scope of Activities": String,
  "Operational Area": String,
  "Climate Zone": String,
  "City Type": String,
  "Date Founded": Number,
  "Economic Networks": String,
  Associations: String,
  "Number of Employees": String,
  "Annual Revenue": String,
  References: String,
  "Product Description": String,
  "Customers Description": String,
  "Workforce Description": String,
  "Production Description": String,
  "Sourcing Description": String,
  "Supporting Services Description": String,
  "Other Outputs Description": String,
  "Distributing Description": String,
  "Re-cycling Description": String,
  "Managing Description": String,
  "Decision Making Description": String,   
  "Steering Description": String,
  "Ownership Description": String,
  "Business Model Description": String,
  History: String,
  Recognition: String,
  "Future Outlook": String,
  Researcher: String,
  "Last Updated": String,
  "Update History": String
},
{
  versionKey: false
});

module.exports = Enterprise = mongoose.model('enterprise', entSchema);