require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const morgan   = require('morgan');

const app  = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/thrust_calculator';

// Middleware
app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/propellers', require('./routes/propellers'));
app.use('/api/calculate',  require('./routes/calculate'));

app.get('/api/health', (_, res) =>
  res.json({ status: 'ok', time: new Date() })
);

// Root route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Connect DB & start
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
  );
})
.catch(err => {
  console.error('❌ MongoDB error:', err.message);
  process.exit(1);
});