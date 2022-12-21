let express = require('express');
const { userLogin, userRegsistration } = require('../../controller/Auth/userAuthentication');
let router = express.Router();

router.route('/login')
    .all((req, res, next)=>{
        next();
    })
    .get((req, res, next)=>{
        // redirect to view Page
        res.json({
            message:"making login Routes"
        })
    })
    .post(userLogin)
;

router.route('/register')
    .all((req,res,next)=>{
        next()
    })
    .get((req, res, next)=>{
        res.json({
            message:"making login Routes"
        })
    })
    .post(userRegsistration)
;

module.exports = router;
