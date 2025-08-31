import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUCTION_PLATFORM",
    })
    .then(() => {
      console.log("Connected successfully to database.");
    })
    .catch((error) => {
      console.log(`Some error occured while connecting to database: ${error}`);
    });
};
