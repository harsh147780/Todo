const express=require('express');

const router=express.Router();

const getTodos=require("../controllers/todo.controller");
router.get("/",(req,res)=>{
    try {
        res.send("Hello server");
    } catch (error) {
        console.log("Found error",err);
    }
})

module.exports=router;