const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    // console.log(req, "req");
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ _id: decoded._id });
    // console.log(user, "token -----------> ");
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
    
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};

// const Authenticate = async (req, res, next) => {
//   console.log(req,"request")
//   try {
//     console.log("hi dd", req.cookies);
//     const token = req.cookies.jwtoken;
//     console.log("hello")
//     const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
//     const rootUser = await User.findOne({
//       _id: verifyToken._id,
//       "tokens.token": token,
//     });

//     if (!rootUser) {
//       throw new Error("User not found");
//     }

//     req.token = token;
//     req.rootUser = rootUser;
//     req.UserId = rootUser._id;

//     next();

//   } catch (err) {
//     res.status(401).send("Unauthorized : No Token provded");
//     console.log(err);
//   }
// };

module.exports = Authenticate;
