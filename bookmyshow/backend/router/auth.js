const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); /* To hash password */
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../model/userSchema");
const Authenticate = require("../middleware/Authenticate");

router.get("/", (req, res) => {
  res.send(`Hello ffdf`);
});

router.post("/register", async (req, res) => {
  const { name, email, password, confirmpassword, phone } = req.body;
  // console.log(name, email, password, phone);

  // for validation
  if (!name || !email || !password || !confirmpassword || !phone) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  }

  //  with async/await
  try {
    const userExist = await User.findOne({
      email: email,
    }); /* To check if email exists */

    if (userExist) {
      return res.status(422).json({ error: "Email Already Exists" });
    } else if (password != confirmpassword) {
      return res.status(422).json({ error: "Password do not match" });
    } else {
      const user = new User({
        name,
        email,
        password,
        confirmpassword,
        phone,
      });

      // here we need to apply password hash logic

      const userRegistered = await user.save();

      // console.log(`${user} user registered successfully`);
      // console.log(userRegistered);

      if (userRegistered) {
        res.status(201).json({ message: "User Registered Successfully" });
      } else {
        res.status(200).json({ error: "Failed to register" });
      }
    }
  } catch (err) {
    // console.log(err);
  }

  //   with Promise
  //   User.findOne({ email: email })
  //     .then((userExist) => {
  //       if (userExist) {
  //         return res.status(422).json({ error: "Email Already Exists" });
  //       }

  //       const user = new User({
  //         name,
  //         email,
  //         password,
  //         confirmpassword,
  //         phone,
  //       });

  //       user
  //         .save()
  //         .then(() => {
  //           res.status(201).json({ message: "User Registered Successfully" });
  //         })
  //         .catch((error) =>
  //           res.status(200).json({ error: "Failed to register" })
  //         );
  //     })
  //     .catch((err) => console.log(err));
});

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({message:"awesome"})

  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin, "userLogin");

    if (userLogin) {
      const isMAtch = await bcrypt.compare(
        password,
        userLogin.password
      ); /*To compare passwords of hash and user entered passwd */

      token = await userLogin.generateAuthToken();

      console.log(token, "token");
      // to store in cookie
      res.cookie("jwtoken", token, {
        expires: new Date(
          Date.now() + 25892000000
        ) /* To expires in 30 days(25892000000 milli sec) */,
        httpOnly: true,
      });
      // to store in cookie end
      if (!isMAtch) {
        res.status(400).json({ error: "Invalid Credenials" });
      } else {
        res.status(200).json({ message: "User SignedIn Successfully", token });
      }
    } else {
      res.status(400).json({ error: "Invalid Credenials" });
    }
  } catch (err) {
    // console.log(err);
  }
});


router.get("/logout", Authenticate, async (req,res)=> {
  try{
    res.clearCookie("jwt");
    await req.user.save();
    
     console.log("successfully logged out")
  }
  catch(err){
    console.log(err);
    res.status(500).send(err);
  }
})
// profile page

router.get("/profiledata", Authenticate, async (req, res) => {
  //  console.log(req,"request user")

  try {
    // res.status(201).send()
    res.send(req.user);
  } catch (err) {
    // console.log(err);
  }
});

module.exports = router;
