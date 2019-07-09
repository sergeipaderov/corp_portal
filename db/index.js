const mongoose = require('mongoose');
const dbConfig = require('../config/db');

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

  mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(
    () => console.log('DB is connected...'),
    err => console.log('Error: ', err)
);
const db = mongoose.connection;

db.on('disconnected', () => {
  console.log('mongoose connection disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('mongoose connection closed throw app terminatatnio');
    process.exit(0);
  });
});
