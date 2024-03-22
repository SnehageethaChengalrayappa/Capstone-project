const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: String,
  description: String,
  date: Date,
  time: String,
location: String,
  category: String,
  capacity: Number,
  registrationDeadline: Date,
  attendeeList: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Event', EventSchema);