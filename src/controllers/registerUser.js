const knex = require('../connection/database')
const validateRegister = require('../validations/validateRegister')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
	const { nome, email, senha } = req.body

	try {
		await validateRegister.validate(req.body)

		const [emailInUse] = await knex('usuario')
			.where('email', email)
			.returning('*')

		if (emailInUse) return res.status(400).json('Email em uso.')

		const passwordEncrypted = await bcrypt.hash(senha, 12)

		const [userRegistered] = await knex('usuario')
			.insert({
				nome,
				email,
				senha: passwordEncrypted
			})
			.returning('*')

		if (!userRegistered) {
			return res
				.status(400)
				.json('Não foi possível fazer o cadastro no momento.')
		}

		return res.status(201).json('Cadastrado(a) com sucesso.')
	} catch (error) {
		return res.status(500).json(error.message)
	}
}
