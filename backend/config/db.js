import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://greatstack:9341445522@cluster0.0jtigzb.mongodb.net/food-del');
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to database:", error);
        process.exit(1); // Exit the process with failure
    }
};
