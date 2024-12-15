const express=require('express')
const app=express()
const cors=require('cors')
const {connectDB}=require('./Config/dbConnection')
//user routes
const UserRouteGet=require('./Routes/UserRoutes')
const UserControllerPostLogin=require('./Routes/UserRoutes')
//Author routes
const AuthorControllerCreatePost=require('./Routes/AuthorRoutes')
const AuthorControllerGetPost=require('./Routes/AuthorRoutes')
const AuthorControllerDeletePost=require('./Routes/AuthorRoutes')
const AuthorControllerEditPost=require('./Routes/AuthorRoutes')
const AuthorControllerDraftPost=require('./Routes/AuthorRoutes')
const AuthorControllerManageMyGet=require('./Routes/AuthorRoutes')
const AuthorControllerManagePublish=require('./Routes/AuthorRoutes')
const AuthorControllerViewAllPosts=require('./Routes/AuthorRoutes')
const AuthorControllerViewBlogById=require('./Routes/AuthorRoutes')
//db connection 
connectDB();
//middleware
app.use(cors())
app.use(express.json())
//routes
app.use(UserRouteGet)
app.use(UserControllerPostLogin)
//Author routes
app.use(AuthorControllerCreatePost)
app.use(AuthorControllerGetPost)
app.use(AuthorControllerDeletePost)
app.use(AuthorControllerEditPost)
app.use(AuthorControllerDraftPost)
app.use(AuthorControllerManageMyGet)
app.use(AuthorControllerManagePublish)
app.use(AuthorControllerViewAllPosts)
app.use(AuthorControllerViewBlogById)

app.listen(4000, () => {
    console.log('Server is Connected')
})


