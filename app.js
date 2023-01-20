//N1ESCCAEDLT03ZjJ
const mongoose = require('mongoose');

const DB_HOST =
  'mongodb+srv://kravamax:N1ESCCAEDLT03ZjJ@cluster0.kyzhmsh.mongodb.net/contacts_reader?retryWrites=true&w=majority';

mongoose
  .connect(DB_HOST)
  .then(() => console.log('Database connect success'))
  .catch((error) => console.log(error.message));
