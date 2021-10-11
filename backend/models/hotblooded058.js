const mongoose = require('mongoose');
const SachinSchema = new mongoose.Schema({
  id: { type: String, required: true },
  user_id: { type: String, required: true },
  created_at: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});
mongoose.model('User', SachinSchema);
