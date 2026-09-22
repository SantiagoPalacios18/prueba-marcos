const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {

        const token = req.headers['authorization'].split(' ')[1]

        const decode = await jwt.verify(token, 'misecreto')

        req.user = decode
        
        next()
    } catch (error) {
        res.status(403).json(error)
    }
}

module.exports = {
    auth
}