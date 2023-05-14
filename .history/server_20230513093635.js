const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
