const mongoose = require('mongoose');

const connectDB = (url)=>{
return mongoose
    .connect(url);
}

module.exports = connectDB;

// mongoose
    // .connect(conncetionString);
    // .then(() => console.log("Connected to DB"))
    // .catch((err) => logger.error(err));