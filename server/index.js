const express=require('express')
const app=express()
const cors=require('cors')
const {connectDB}=require('./Config/dbConnection')
//user routes
const UserRouteGet=require('./Routes/UserRoutes')
const UserControllerPostLogin=require('./Routes/UserRoutes')
const UserControllerActivity=require('./Routes/UserRoutes')
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
const AuthorControllerEditUser=require('./Routes/AuthorRoutes')
const AuthorControllerProfileFetch=require('./Routes/AuthorRoutes')
//command routes
const CommandControllerPost=require('./Routes/CommandRoutes')
const CommandControllerGet=require('./Routes/CommandRoutes')
const CommandControllerMyCommands=require('./Routes/CommandRoutes')
const CommandControllerViewCommands=require('./Routes/CommandRoutes')
const CommandControllerViewDelete=require('./Routes/CommandRoutes')
//histroy
const UserControllerClearActivity=require('./Routes/UserRoutes')
//db connection 
connectDB();
//middleware
const corsOptions = {
    origin: 'https://blog-application-3-9u4p.onrender.com',  // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allow the necessary HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
  };
  
  app.use(cors(corsOptions));  // Use the CORS configuration

app.use(express.json())
//routes
app.use(UserRouteGet)
app.use(UserControllerPostLogin)
app.use(UserControllerActivity)
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
app.use(AuthorControllerEditUser)
app.use(AuthorControllerProfileFetch)
//command routes
app.use(CommandControllerPost)
app.use(CommandControllerGet)
app.use(CommandControllerMyCommands)
app.use(CommandControllerViewCommands)
app.use(CommandControllerViewDelete)
//history
app.use(UserControllerClearActivity)
app.listen(4000, () => {
    console.log('Server is Connected')
})


