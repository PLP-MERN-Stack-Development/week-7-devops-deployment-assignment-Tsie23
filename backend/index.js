require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
}));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Example Book schema and route (replace with your actual routes)
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  status: {
    type: String,
    enum: ['Started', 'In Progress', 'Complete'],
    default: 'Started',
  },
});
const Book = mongoose.model('Book', bookSchema);

app.get('/api/books', async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

app.post('/api/books', async (req, res, next) => {
  try {
    const book = new Book({
      ...req.body,
      status: req.body.status || 'Started',
    });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
});

app.put('/api/books/:id', async (req, res, next) => {
  try {
    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

// Connect to MongoDB Atlas
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Connection pooling
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }); 