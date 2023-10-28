const { verify } = require('jsonwebtoken');

const validateToken = (req, res, next) => {
    const token = req.header('authToken');
    if(!token) return res.status(401).send('Authentication error!');
    try{
        const verified = verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }catch(err){
        res.status(401).send('Authentication error!');
    }
}

module.exports = {
    validateToken
}
