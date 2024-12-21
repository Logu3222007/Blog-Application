const AuthorModel=require('../Models/AuthorModel')
const UserModel=require('../Models/UserModel')
const AuthorControllerCreatePost=async(req,res)=>{
    try {
        const {title, content} = req.body;
        const userId = req.user.id; // Assuming user is attached to the request via authorization middleware

       
    
        if (!title || !content) {
          return res.status(400).json({ message: 'Please provide all fields: title, content.' });
        }
        const CreatePost = new AuthorModel({
          Title:title,
          Content:content,
          Published:'yes',
          User: userId, // Reference the authenticated user

          
        });
    
        // Save the user post to the database
        await CreatePost.save();
    
        res.status(201).json({
          message: 'User Post created successfully!',
        });
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
      }
}
const AuthorControllerGetPost =async(req,res)=>{
    
try{
  const userId = req.user.id; // Get the user ID from the authenticated user
  // const GetCreatedPost=await AuthorModel.find({Published:'yes'})
  const GetCreatedPost = await AuthorModel.find({ User: userId, Published: 'yes' }).populate('User', 'Username Email');

if (GetCreatedPost.length === 0) {
    return res.status(404).json({ message: "No posts found." });
  }
res.status(200).json({message:"Post Fetched Successfully!",GetCreatedPost})
}
catch(error){
res.status(500).json({message:"Post Fetching Error",error: error.message })
}
}
const AuthorControllerDeletePost=async(req,res)=>{
    const {postid}=req.params
    try{
        const DeleteCreatedPost=await AuthorModel.findByIdAndDelete(postid)
        if (!DeleteCreatedPost) {
            return res.status(404).json({ message: "post not found." });
          }
        res.status(200).json({message:"Post Deleted Successfully!"})
        }
        catch(error){
        res.status(500).json({message:"Post Deleting Error",error: error.message })
        }

}
const AuthorControllerEditPost=async(req,res)=>{
    const {postid}=req.params
    const {Title,Content}=req.body;
 
    try{
        const EditCreatedPost=await AuthorModel.findByIdAndUpdate(postid,{Title,Content},{ new: true })
        if (!EditCreatedPost) {
            return res.status(404).json({ message: "post not found." });
          }
        res.status(200).json({message:"Post Updated Successfully!",EditCreatedPost})
        }
        catch(error){
        res.status(500).json({message:"Post Updating Error",error: error.message })
        }

}
const AuthorControllerDraftPost=async(req,res)=>{
    const {id}=req.params
    const {Published}=req.body
    
 
    try{
        const DraftedPost=await AuthorModel.findByIdAndUpdate(id,{Published},{ new: true })
        if (!DraftedPost) {
            return res.status(404).json({ message: "post not found." });
          }
        res.status(200).json({message:"Post drafted Successfully!",DraftedPost})
        }
        catch(error){
        res.status(500).json({message:"Post drafted Error",error: error.message })
        }

}
const AuthorControllerManageMyGet=async(req,res)=>{
    try{
        const GetDraftPost=await AuthorModel.find({Published:'no'})
        if (GetDraftPost.length === 0) {
            return res.status(404).json({ message: "No posts found." });
          }
        res.status(200).json({message:"Post Fetched Successfully!",GetDraftPost})
        }
        catch(error){
        res.status(500).json({message:"Post Fetching Error",error: error.message })
        }
}
const AuthorControllerManagePublish=async(req,res)=>{
    const {id}=req.params
    const {Published}=req.body
    
 
    try{
        const PublishDraftedPost=await AuthorModel.findByIdAndUpdate(id,{Published},{ new: true })
        if (!PublishDraftedPost) {
            return res.status(404).json({ message: "post not found." });
          }
        res.status(200).json({message:"Post publish Successfully!",PublishDraftedPost})
        }
        catch(error){
        res.status(500).json({message:"Post publish Error",error: error.message })
        }

}
const AuthorControllerViewAllPosts=async(req,res)=>{
  try{
    // const GetCreatedPost=await AuthorModel.find({Published:'yes'})
    const GetViewAllPosts = await AuthorModel.find({Published: 'yes' }).populate('User', 'Username Email').exec();

  
  if (GetViewAllPosts.length === 0) {
      return res.status(404).json({ message: "No posts found." });
    }
  res.status(200).json({message:"Post Fetched Successfully!",GetViewAllPosts})
  }
  catch(error){
  res.status(500).json({message:"Post Fetching Error",error: error.message })
  }

}
const AuthorControllerViewBlogById=async(req,res)=>{
  try{
    // const GetCreatedPost=await AuthorModel.find({Published:'yes'})
    const GetBlogById = await AuthorModel.findOne({ 
      _id: req.params.id,     // The ID you provide as a parameter
      Published: 'yes'        // Ensure that the blog post is published
  }).populate('User', 'Username Email')  // Populate the User field with specific fields
    .exec();
  
  if (GetBlogById.length === 0) {
      return res.status(404).json({ message: "No posts found." });
    }
  res.status(200).json({message:"Post Fetched Successfully!",GetBlogById})
  }
  catch(error){
  res.status(500).json({message:"Post Fetching Error",error: error.message })
  }

}
const AuthorControllerEditUser=async(req,res)=>{
  const {name,email,bio}=req.body
  const {id}=req.params
  try{
    if(name.length<3){
      return res.status(400).json({message:"The Username Must be 3 Characters"})
    }
    const UpdatedUserProfile=await UserModel.findByIdAndUpdate(id,{Username:name,Bio:bio},{ new: true })
    console.log('user: ',UpdatedUserProfile)
    if (!UpdatedUserProfile) {
        return res.status(404).json({ message: "User not found." });
      }
    res.status(200).json({message:"User Profile Updated Successfully!",UpdatedUserProfile})
    
    
    }
    catch(error){
    res.status(500).json({message:"User Profile Updating Error",error: error.message })
    }


}
const AuthorControllerProfileFetch=async(req,res)=>{
const {id}=req.params
try{
  const ProfileData=await UserModel.findById(id)
  res.status(200).json({message:"Profile Data Fetched Successfully!",ProfileData})
}
catch(err){
  res.status(500).json({message:"Internal Server Error"})
}
}
module.exports={AuthorControllerCreatePost,AuthorControllerGetPost,
                AuthorControllerDeletePost,AuthorControllerEditPost,
                AuthorControllerDraftPost,AuthorControllerManageMyGet,
                AuthorControllerManagePublish,AuthorControllerViewAllPosts,
                AuthorControllerViewBlogById,AuthorControllerEditUser,
                AuthorControllerProfileFetch,}