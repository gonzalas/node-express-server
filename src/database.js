const { DB_HOST, MONGO_URI } = require('./config');
const { FgGreen, FgRed } = require('./utils/consoleStyles');

const mongoose = require('mongoose');


(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(FgGreen, `[Database] Mongodb succesfully connected to ${DB_HOST}`);
  } catch (error) {
    console.log(FgRed, '[Database] Mongodb error ', error);
  }
})();
