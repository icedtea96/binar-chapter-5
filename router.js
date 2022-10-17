const express = require('express');
const router = express.Router();
const examplecontroller = require('./controllers/examplecontroller')

router.get('/', examplecontroller.home)

router.get('/rps-game', examplecontroller.rps)

router.post('/login', examplecontroller.login)


module.exports = router
