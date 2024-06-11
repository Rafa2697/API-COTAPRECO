import { Router } from "express";
import {getUsers, createUser, deleteUser, updateUser, loginUser} from "./controllers/UserController.js"

const routes = Router();

routes.get('/users', getUsers)
routes.post('/users',createUser)
routes.post('/login', loginUser)
routes.delete('/users/:id',deleteUser)
routes.put('/users/:id', updateUser) 


export default routes