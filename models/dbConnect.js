const mongoose = require("mongoose");

const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB: SUCCESS!")
    } catch (err) {
        console.log("Error connecting to DB:", err)
    }
}

module.exports = DB;