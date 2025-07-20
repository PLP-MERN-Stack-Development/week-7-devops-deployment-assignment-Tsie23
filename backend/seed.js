require('dotenv').config();
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
});
const Book = mongoose.model('Book', bookSchema);

const books = [
  {
    title: 'Hunger Eats A Man',
    author: 'Nkosinathi Sithole',
    year: 2015,
  },
  {
    title: 'The Art Of War',
    author: 'Sun Tzu',
    year: null,
  },
  {
    title: 'He Banna!',
    author: 'Ace Moloi',
    year: 2024,
  },
  {
    title: 
      "A Freedom Soldier's Heart - A Tribute To Winnie Madikizela Mandela",
    author: 'Grant Son',
    year: 2016,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log('Seed data inserted successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding data:', err);
    process.exit(1);
  }
}

seed(); 