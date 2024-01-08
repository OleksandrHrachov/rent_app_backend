const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MONGO_DB - connected");
  } catch (error) {
    console.warn('ERROR =>', error);
  }
}

module.exports = connectDb;