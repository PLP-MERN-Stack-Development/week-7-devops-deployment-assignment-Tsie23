const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./utils/logger');
const helmet = require('helmet');

dotenv.config();

const app = express();
app.use(helmet());

const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Book routes
app.use('/api/books', bookRoutes);

// Error handler
app.use((err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  })
  .catch(err => logger.error('MongoDB connection error:', err));