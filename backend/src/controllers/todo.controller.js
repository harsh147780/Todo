const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).send("created successfully");
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
};

const getTodos = async (req, res) => {
    try { 
        const todos = await Todo.find();
        res.status(200).send(todos);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body  , { new: true });
        res.status(200).json({ message: "updated successfully",data : todo });
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
};

const deleteTodo = async (req,res) =>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({message : "deleted successfully"});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
};

module.exports = { createTodo, getTodos,updateTodo, deleteTodo };