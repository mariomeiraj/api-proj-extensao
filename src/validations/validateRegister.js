const { string } = require('yup')
const yup = require('./config')

const schema = yup.object().shape({
	nome: string().required().min(3),
	email: string().email().required(),
	senha: string().required().min(8)
})

module.exports = schema
