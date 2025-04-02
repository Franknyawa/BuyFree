const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken')


mongoose
  .connect (
    'mongodb+srv://nyawafrank096:PzYAbTY3zUmpTnRM@cluster0.fu1hv.mongodb.net/',
    {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    }
  )
  .then (() => {
    console.log ('Database connected');
  })
  .catch (err => console.log ('error connecting to database', err));

app.listen (port, () => {
  console.log ('Server is running on port 8000');
});

const User = require ('../models/User');
const Order = require ('../models/Order');

//function to send verification email to user
const sendVerificationEmail =async (email, verificationToken) => {
  //creaate nodemailer transporter

  const transporter = nodemailer.createTransport({
    //configure email service and authentication
    service: 'gmail',
    auth:{
      user: "nyawafrank096@gmail.com",
      pass: ""
    }
  })
}

    //compose the email message
    const mailOptions = {
      from:"buyFree.com",
      to : email,
      subject: "Email Verification",
      text: `Click the link to verify your email: http://localhost:8000/verify/${verificationToken}`,
};


//endpoint to register in the app 
app.post ("/register", async (req, res) => {
  try{
    const {name, email, password} = req.body;

    //check if the email already exists
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({message: "Email already registered"});
    }

    //create a new user
    const newUser = new User({
      name,
      email,
      password,
    });

    //generate a verification token
    newUser.verificationToken = crypto.randomBytes(20).toString('hex');

    //save the user to the database
    await newUser.save();

    //send a verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

  }catch (error) {
    console.log (error);
    res.status (500).json ({message: "Registration failed"});
  }
})




