import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strict", false);
    const conn = await mongoose.connect(
      "mongodb+srv://akshadagrawa:Kawaii@typetracker.lilobuz.mongodb.net/"
    );
    console.log(`database connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
