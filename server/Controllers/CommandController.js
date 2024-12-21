const CommandModel=require('../Models/CommandModel')
const CommandControllerPost=async(req,res)=>{
    try {
        const {commandInput,id} = req.body;
        const userId = req.user.id; // Assuming user is attached to the request via authorization middleware
       
    
        if (!commandInput) {
          return res.status(400).json({ message: 'Please provide all fields, commands.' });
        }
        const CreateCommand = new CommandModel({
          Command:commandInput,
          User: userId, // Reference the authenticated user
          Post:id
          
          
        });
    
        // Save the user post to the database
        await CreateCommand.save();
    
        res.status(201).json({
          message: 'User Command created successfully!',
        });
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
      }

}
const CommandControllerGet=async(req,res)=>{
const {id}=req.params
try{
    const FetchCommand = await CommandModel.find({Post:id}).populate({
        path: "Post", // Field in CommandModel referencing Author
        select: "_id", // Fields to include from Author
    });
    

    res.status(200).json({message:"Command Fetched Successfully!",FetchCommand})

}
catch(err){
    res.status(500).json({message:"Internal Server Error"})
}
}
module.exports={CommandControllerPost,CommandControllerGet}