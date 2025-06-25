import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    let DB_CONNECTION_STRING = "";
    if (process.env.NODE_ENV === "development") {
      DB_CONNECTION_STRING = process.env.MONGODB_LOCAL_URI!;
    }
    if (process.env.NODE_ENV === "production") {
      DB_CONNECTION_STRING = process.env.MONGODB_URI!;
    }

    const dbResponse = await mongoose.connect(DB_CONNECTION_STRING)
    console.log("Db connected successfully",dbResponse.connection.host)

  } catch (error) {
    console.log("Db connnection error",error);
    process.exit
  }
};

