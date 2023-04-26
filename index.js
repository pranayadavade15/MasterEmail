const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
  });
app.get('/get', (req, res) => {
    res.send('Welcome to the get homepage');
  });