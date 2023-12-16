const mongoose = require("mongoose");

const conn = async(req,res) => {
    try{
        await mongoose
        .connect("mongodb+srv://singhtarun1508:123456789101112@cluster0.d6vt8h7.mongodb.net/")
        .then(() => {
            console.log("connected");
        });
    } catch(error){
        res.status(400).json({
            message: "not connected",
        });
    }
};
conn();