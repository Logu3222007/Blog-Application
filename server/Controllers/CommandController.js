const CommandModel=require('../Models/CommandModel')
const {logActivity}=require('../uility/logActivity')
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
            await logActivity(userId, 'Comment', commandInput, 'created'); // Log activity
        
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
    }).populate({
        path:"User",
        select:"Username"
    })
    

    res.status(200).json({message:"Command Fetched Successfully!",FetchCommand})

}
catch(err){
    res.status(500).json({message:"Internal Server Error"})
}
}
const CommandControllerMyCommands=async(req,res)=>{
    const {id}=req.params;
    try{
        const FetchMyCommand = await CommandModel.find({User:id}).populate({
            path: "Post", // Field in CommandModel referencing Author
            select: "_id Title timestamps", // Fields to include from Author
        }).populate({
            path:"User",
            select:"_id Username"
        })
        
    
        res.status(200).json({message:"Command Fetched Successfully!",FetchMyCommand})
    
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}
const CommandControllerViewCommands=async(req,res)=>{
    const {id}=req.params;
    try{
        const FetchMyCommand = await CommandModel.find({}).populate({
            path: "Post", // Field in CommandModel referencing Author
            select: "_id Title timestamps", // Fields to include from Author
        }).populate({
            path:"User",
            select:"_id Username"
        })
        
    
        res.status(200).json({message:"Command Fetched Successfully!",FetchMyCommand})
    
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error"})
    }
}

const CommandControllerViewDelete = async (req, res) => {
        const { id } = req.params;  // Get the comment/command ID from the request params
      
        try {
          // Find the command by ID
          const command = await CommandModel.findById(id).populate({path:'User',select:"_id"})
      
          // If command not found, return a 404 error
          if (!command) {
            return res.status(404).json({ message: 'Command not found.' });
          }
      
          // Delete the command
          await CommandModel.findByIdAndDelete(id);
          await logActivity(command.User._id, 'Comment', command.Command, 'deleted'); // Log activity
          
          // Send a success response after deletion
          res.status(200).json({ message: 'Command deleted successfully.' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error.', error: error.message });
        }     
}
module.exports={CommandControllerPost,CommandControllerGet,CommandControllerMyCommands,
    CommandControllerViewCommands,CommandControllerViewDelete
}