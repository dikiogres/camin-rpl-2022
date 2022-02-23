//import fs from "fs";
import user from "../models/user.js"
//import {v4 as uuidv4} from 'uuid';

// const getUserData = () => {
//     const jsonData = fs.readFileSync('./db/products.json');
//     return JSON.parse(jsonData)    
// }

// const saveUserData = (data) => {
//     const stringifyData = JSON.stringify(data, null, 2);
//     fs.writeFileSync('./db/products.json', stringifyData)
// }
// //let usersData = [];
// let usersData = getUserData();

export const getAllUsers = async (req, res) => {
    try{
        const user = await User.find();
        res.status(200).json({ 
            success: true, 
            data: user
        });
    }catch(error){
        res.status(500).json({ 
            success: false, 
            msg: error
        });
    }
};

export const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(200).json({
            success: true, 
            data: user
        });
    }catch(error){
        res.status(500).json({
            success: false, 
            msg: error
        })
    }
};

export const getUser = async(req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true, 
            data: user
        });
    }catch(error){
        res.status(500).json({
            success: false,
            msg: error
        });
    }
};

export const deleteUser = async (req, res)=>{
    try{
        const { id } = req.params.id;
        const user = await User.findByIdAndDelete(id);
        if(!item){
            return res.status(404).json({
                success: false,
                msg: `There is no item with id: ${id}`
            });
        }
        return res.status(200).json({
            success: true,
            msg: `Item with id: ${id} deleted successfully`
        });
    }catch(error){
        return res.status(500).json({
            success: false,
            msg: error
        });
    };
}

export const updateUser = async (req, res)=> {
    try{
        const { id } = req.params;
        const { firstName, lastName, age } = req.body;
        
        const user = await User.findByIdAndUpdate(id, {
                firstName,
                lastName,
                age
            },
            {
                new: true,
                runValidators: true,
                overwrite: true
            }
        );
        if(!user){
            return res.status(404).json({
                success: false,
                msg: `User with id: ${id} not found`
            })
        }
        return res.status(200).json({
            success: true,
            data: user
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            msg: error
        })
    };
}

export default {
    getAllUsers, 
    createUser, 
    getUser, 
    deleteUser, 
    updateUser
};