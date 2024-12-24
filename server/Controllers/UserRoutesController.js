const UserModel=require('../Models/UserModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const path=require('dotenv').config();
const ActivityModel=require('../Models/ActivityModel')



const UserControllerPost = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //hash password
    const HashedPassword=await bcrypt.hash(password,10)

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide all fields: username, email, and password.' });
    }
    const newUser = new UserModel({
      Username:username,
      Email:email,
      Password:HashedPassword, // In a real-world scenario, you should hash the password before saving it
      Bio:null, 
      Role:'regular'
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({
      message: 'User created successfully!',
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};
const UserControllerPostLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ Email: email });

        if (!user) {
            return res.status(404).json({ message: "User not found. Please sign up." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.Password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Sign JWT with role
        const token = jwt.sign(
            { id: user._id, email: user.Email, role: user.Role ,userName:user.Username }, // Include role in payload
            process.env.JWT_SECRET,
            { expiresIn: '3d' }
        );

        res.status(200).json({
            message: "Login successful!",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};
const UserControllerActivity = async (req, res) => {
  const { id } = req.params; // Assuming this is the activity ID or user ID
  try {
    // Fetch activity by ID or related to a specific user
    const activity = await ActivityModel.find({ userId: id }).populate({path:"userId",select:"_id"})

    if (!activity || activity.length === 0) {
      return res.status(404).json({ message: "No activity found for the provided user or ID." });
    }

    res.status(200).json({ message: "Activity fetched successfully!", activity });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message, // Optional: include error details in development
    });
  }
};

module.exports = { UserControllerPost,UserControllerPostLogin,UserControllerActivity };
