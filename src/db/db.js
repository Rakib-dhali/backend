const mongoose = require('mongoose')


async function connectDB() {
    await mongoose.connect(`mongodb+srv://rakib343:e1nUutNtw0z1rz9L@cluster0.buo9k6z.mongodb.net/project-1`)
    console.log("database is connected");
}

module.exports = connectDB