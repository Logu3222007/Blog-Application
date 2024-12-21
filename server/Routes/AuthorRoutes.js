const express=require('express')
const route=express.Router()
const {AuthorControllerCreatePost,AuthorControllerGetPost,
    AuthorControllerDeletePost,AuthorControllerEditPost,AuthorControllerDraftPost,
    AuthorControllerManageMyGet,AuthorControllerManagePublish,AuthorControllerViewAllPosts,
    AuthorControllerViewBlogById,AuthorControllerEditUser,AuthorControllerProfileFetch
}=require('../Controllers/AuthorRoutesController')
const authorizeRoles=require('../authenticateToken')
route.post('/createpost',authorizeRoles('admin','author'),AuthorControllerCreatePost)
route.get('/managepost',authorizeRoles('admin','author'),AuthorControllerGetPost)
route.delete('/managepost/:postid',authorizeRoles('admin','author'),AuthorControllerDeletePost)
route.patch('/managepost/:postid',authorizeRoles('admin','author'),AuthorControllerEditPost)
route.put('/managepost/:id',authorizeRoles('admin','author'),AuthorControllerDraftPost)
route.get('/managemypost',authorizeRoles('admin','author'),AuthorControllerManageMyGet)
route.put('/managemypost/:id',authorizeRoles('admin','author'),AuthorControllerManagePublish)
route.get('/authorviewallposts',authorizeRoles('admin','author'),AuthorControllerViewAllPosts)
route.get('/fullblogpost/:id',authorizeRoles('admin','author'),AuthorControllerViewBlogById)
route.put('/authoreditprofile/:id',authorizeRoles('admin','author'),AuthorControllerEditUser)
route.get('/authoreditprofile/:id',authorizeRoles('admin','author'),AuthorControllerProfileFetch)












module.exports=route