const mongoose = require("mongoose");

//creating database
const dbval = process.env.DATABASE;

mongoose.connect(dbval,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
}).then(function() {
        console.log("Database Connection Successful");
    }).catch(function(errorvalue) {
        console.log("Connection Failed");
    });
