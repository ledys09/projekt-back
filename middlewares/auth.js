const jwt = require('jsonwebtoken')


//Verify token
module.exports = (req, res, next) => {
    const token = req.get('token');

    jwt.verify(token, process.env.JWT_SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                msg: 'Token no válido',
                errors: err
            })
        }
        req.usuario = decoded.usuario
        next();
        /* res.status(200).json({
        success: true,
        msg: 'Token válido',
        decoded: decoded 
})*/

    })

}