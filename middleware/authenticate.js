
var models = require('../models/sequelize');
const Admin=require('../models/admin');
const jwt=require('jsonwebtoken');
module.exports={ async authenticate(req,res,next){
    
        const token=req.header('Authorization');
        if(!token) return res.status(401).send('Access denied.Please provide the Token');
        try{
        const verified=await jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!verified.id) return res.status(403).send("not a verified user");
        const admin=await models.Admin.findOne({where:{id:verified.id,jwt:token}})
        if(!admin)
        {
            return res.status(401).send("No admin found with this Authorization");
        }
        else{
            req.admin=admin;
            console.log(req.admin);
            next();
        }
       
      }
    catch(err)
    {
        return res.send(err);
    }
} 
};
