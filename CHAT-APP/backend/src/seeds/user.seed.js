import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Users
    {
        email: "fayyazurrehman@gmail.com",
        fullName: "FayyazUr Rehman",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/09/24/a7/0924a7ef295741e916c8f42512bbe5bd.jpg",
    },
    {
        email: "danish@gmail.com",
        fullName: "Danish Chouhan",
        password: "123456",
        profilePic: "https://i.pinimg.com/236x/85/86/0a/85860abe997930105f61db9630c687b8.jpg",
    },
    {
        email: "sahle@gmail.com",
        fullName: "Sahle Majeed",
        password: "123456",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpn548ahXpPoynS6q6iT-ZLI-nL69Yb-4Dxg&s",
    },
    {
        email: "sahanawaz@gmail.com",
        fullName: "Sahanawaz Khan",
        password: "123456",
        profilePic: "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg",
    },
    {
        email: "Uzair@gmail.com",
        fullName: "Uzair Ahmed",
        password: "123456",
        profilePic: "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg",
    },
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

seedDatabase();