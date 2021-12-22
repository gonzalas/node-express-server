require('dotenv').config();
require('./database');
const { PORT } = require('./config');
const { FgCyan } = require('./utils/consoleStyles');

const app = require('./app');

app.listen(PORT, () => {
  console.log(FgCyan, `[Server] Running on port ${PORT}`);
});
