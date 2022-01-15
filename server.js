const express = require('express');
// to write data to animals.json
const fs = require('fs');
const path = require('path');
// routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express(); // assign express() to the app variable so that we can later chain on methods
// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// middleware that instructs server to not gate files behind a server endpoint
app.use(express.static('public'));

const { animals } = require('./data/animals');

router.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
