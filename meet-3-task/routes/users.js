import express from "express";
import users from "../controllers/users.js"

const router = express.Router();

router
    .route("/")
    .get(users.getAllUsers)
    .post(users.createUser);

router
    .route("/:id")
    .get(users.getUser)
    .delete(users.deleteUser)
    .patch(users.updateUser);

export default router;