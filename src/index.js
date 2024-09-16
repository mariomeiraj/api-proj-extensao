require('dotenv').config()
const express = require('express')
const cors = require('cors')
const user = require('./routes/user')

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.get('/test', (req, res) => {
	res.send('Hello world')
})

app.use('/', user)

app.listen(process.env.PORT, () => {
	console.log(`🏃 - Server running on port: ${process.env.PORT}.`)
})
