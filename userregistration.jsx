const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  socialMedia: String,
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
});

module.exports = mongoose.model('User', UserSchema);