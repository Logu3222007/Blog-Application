const express=require('express')
const route=express.Router()
const authorizeRoles=require('../authenticateToken') 
const {UserControllerPost,UserControllerPostLogin,UserControllerActivity}=require('../Controllers/UserRoutesController')
route.post('/register',UserControllerPost)
route.post('/login',UserControllerPostLogin)
route.get('/viewactivity/:id',authorizeRoles('regular','author'),UserControllerActivity)

module.exports=route