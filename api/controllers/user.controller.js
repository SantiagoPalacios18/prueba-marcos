const { User } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({ attributes: { exclude: password } })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

const userRegister = async (req, res) => {
    const { name, email, password } = req.body


    const hashedPassword = await bcrypt.hash(password, 11)

    const userCreated = await User.create({
        name,
        email,
        password: hashedPassword
    })

    res.status(201).json(userCreated)
}

const userLogin = async (req, res) => {
    const { email, password } = req.body

    const searchedUser = await User.findOne({
        where: {
            email: email
        }
    })

    const match = await bcrypt.compare(password, searchedUser.password)

    if (match) {
        const token = await jwt.sign({ id: searchedUser.id, email: searchedUser.email }, 'misecreto', {
            expiresIn: '1h'
        })
        return res.status(201).json(token)
    }
    res.status(401).json({
        message: "Usuario o contraseña incorrectos"
    })
}

const getMe = async (req, res) => {
    const user = await User.findByPk(req.user.id, {
        attributes: {
            exclude: "password"
        }
    })
    res.status(200).json(user)
}

module.exports = {
    getUsers,
    userRegister,
    userLogin,
    getMe
}