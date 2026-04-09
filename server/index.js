require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app  = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/thrust_calculator';

const path = require('path');

// Middleware
app.use(cors());
app.use(express.json());

// Serve static client files
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use('/api/propellers', require('./routes/propellers'));
app.use('/api/calculate',  require('./routes/calculate'));

app.get('/api/health', (_, res) => res.json({ status: 'ok', time: new Date() }));

// Fallback to index.html for single-page app behavior if needed
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Connect DB & start
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB error:', err.message);
    process.exit(1);
  });
