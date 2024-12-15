const express=require('express')
const route=express.Router()
const {UserControllerPost,UserControllerPostLogin}=require('../Controllers/UserRoutesController')
route.post('/register',UserControllerPost)
route.post('/login',UserControllerPostLogin)

module.exports=route