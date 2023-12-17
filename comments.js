// Create web server
// 1. Import express
const express = require('express');

// 2. Create web server
const app = express();

// 3. Listen on port 3000
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});

// 4. Handle GET request on root URL (/)
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// 5. Handle GET request on /comments
app.get('/comments', function(req, res) {
  res.send('You are on comments page!');
});

// 6. Handle GET request on /comments/:id
app.get('/comments/:id', function(req, res) {
  res.send(`You are on comments page for ${req.params.id}`);
});

// 7. Handle POST request on /comments
app.post('/comments', function(req, res) {
  res.send('You are on comments page!');
});