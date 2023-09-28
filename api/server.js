// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();

server.use(express.json());

const Dog = require('./dogs/dogs-model');

// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS
// ADOPTERS ENDPOINTS

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
server.get('/api/dogs', (req, res) => {
  Dog.find()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving the dogs' });
    });
});

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;
