const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})