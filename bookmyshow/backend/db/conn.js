const mongoose = require("mongoose"); /* Middleware*/
const database = process.env.DATABASE;

// mongoose start
mongoose.connect(database, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("connection successful"))
.catch((err) => console.log(err,"no connection"));
// mongoose end