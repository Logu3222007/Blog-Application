// models/ActivityModel.js
const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true }, // e.g., "Post", "Comment"
  title: { type: String, required: true }, // Brief description, e.g., "Sample Post 1"
  action: { type: String, required: true }, // e.g., "created", "updated", "deleted"
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Activity', ActivitySchema);
