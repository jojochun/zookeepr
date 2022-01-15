const path = require('path');
const router = require('express').Router();

// get index.html to be served from Express.js server.  ('/' points to the root route of server)
// this GET route responds with HTML page to display to browser
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// * will act as wildcard: any route not defined will receive the homepage as response (ie. /about,/contact)
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;