const mongoose = require('mongoose')


async function connectDB() {
    await mongoose.connect(`mongodb+srv://rakib343:${process.env.MONGODB_PASSWORD}@cluster0.buo9k6z.mongodb.net/learning`)
    console.log("database is connected");
}

module.exports = connectDB