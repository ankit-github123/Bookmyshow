// reference : https://www.youtube.com/watch?v=JHOszqPHwMg
const dotenv = require("dotenv"); /* For security (hidding password) */
const express = require("express"); /* NODE framework */
const app = express();
// cors err
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let path = require('path');
// cors err end
// paytm begin
 const cors = require("cors");
const bodyParser = require("body-parser");
const paymentRoute = require("./router/paymentRoute");
// paytm end

dotenv.config({ path: "./config.env" });
require("./db/conn"); /* For mongoose*/

const User = require("./model/userSchema"); /*For schema structure */

app.use(
  express.json()
); /*application dont understand json...so we have jsonStringify and jsonParse..this line makes app to understand json*/

app.use(require("./router/auth"));

// mongo connection start
const database = process.env.DATABASE;
const PORT = process.env.PORT;
// mongo connection end

// middleware start

// const middleware = (req, res, next) => {
//   console.log("This is inside middleware", req, res);
//   next();
// };

// middleware end

// middleware controls things like if user is logged in only then show this page or else dont give user access to this page
// app.get("/", (req, res) => {
//   res.send(`Hello`);
// });

// app.get("/about", middleware, (req, res) => {
//   res.send(`Hello About`);
// });

// paytm start

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api", paymentRoute);
// paytm end

// to solve cors err
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// var corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions));

// app.use((req, res, next) => {
//   res.append('Access-Control-Allow-Origin', ['*']);
//   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, XMLHttpRequest');
//   next();
// });


// end of cors err

app.use(cors());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// For mongodb
// dowload from : https://www.mongodb.com/try/download/community
// run in Cmd : "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" --version
// run in Cmd : "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --version"
// run in cmd (to run mongo) : "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"
// >show dbs
// to set path : in env -> for user -> paste C:\Program Files\MongoDB\Server\4.4\bin

// to run backend : nodemon app.js or npm run dev