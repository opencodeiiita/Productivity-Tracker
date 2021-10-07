const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  gid: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  photoUrl: { type: String, required: true },
});
mongoose.model('User', userSchema);
