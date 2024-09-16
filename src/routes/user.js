const express = require('express')
const getUser = require('../controllers/getUser')
const auth = require('../middleware/auth')
const registerUser = require('../controllers/registerUser')
const loginUser = require('../controllers/loginUser')

const routes = express()

routes.post('/login', loginUser)
routes.post('/register', registerUser)

routes.use(auth)

routes.get('/token', (req, res) => {
	return res.status(200).send()
})
routes.get('/', getUser)
//routes.put('/', updateUser)
//routes.delete('/', deleteUser)

module.exports = routes
