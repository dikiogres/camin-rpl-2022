import express from "express";

import { 
    getAllUsers, 
    createUser, 
    getUser, 
    deleteUser, 
    updateUser 
} from '../controllers/users.js'

const router = express.Router();

router
    .get('/', getAllUsers)
    .post('/', createUser);

router
    .get('/:id', getUser)
    .delete('/:id', deleteUser)
    .patch('/:id', updateUser);

export default router;