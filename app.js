const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB connected successfully'))
  .catch((err) => console.log('DB connection error:', err));

const routes = require('./routes');
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
console.log(PORT)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});