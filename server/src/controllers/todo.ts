import { Request, Response } from "express";
import { Todo } from "../models/todo";


export const createNewTodo = async(req : Request,res : Response)=>{
    try {
        const {title}= req.body
        const newTodo = await Todo.create({
           title
        })
        res.status(201).json({message : "New Todo added." ,data : newTodo })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Wrong"})
    }
}

export const getTodos = async(req: Request , res :Response)=>{
        try {
            const getTodo = await Todo.find()
            res.status(200).json({message : "Get All data", data : getTodo})
        } catch (error) {
            res.status(500).json({message: "Something Wrong"})
        }
}

export const getSingleTOdos = async(req:Request,res:Response)=>{
    try {
        const{id} = req.params
        const getTodoById = await Todo.findById(id)
        if(!getTodoById){
            res.status(404).json({message:"Not found"})
        }
        res.status(200).json({message : "Get data by id",data : getTodoById})
    } catch (error) {
        res.status(500).json({message: "Something Wrong"})
    }
}

export const deleteTodos = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params;
        const deleteById = await Todo.findByIdAndDelete(id)
        res.status(200).json({message : "delete_successfully",data : deleteById})

    } catch (error) {
        res.status(200).json({message: "Something Wrong"})
    }
}

export const updateTodo = async(req:Request,res:Response)=>{
    try {
        const {id} = req.params
        const {title} = req.body
        const updateTodo = await Todo.findByIdAndUpdate(id,{
            title
        })
        res.status(200).json({message : "update_successfully",data : updateTodo})

    } catch (error) {
        res.status(500).json({message: "Something Wrong"})

    }
}



