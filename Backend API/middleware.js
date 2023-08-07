const jwt=require("jsonwebtoken");
module.exports=function(req,res,next){
    try{
        let token =req.header("authorization");
        if(!token){
            return res.status(400).send("Token not found")
        }
        let decode=jwt.verify(token,'jwtscreate')
        req.user=decode.user
        next()
    }catch(err){
        console.log(err)
        return res.status(500).send("invalid token")
    }
}