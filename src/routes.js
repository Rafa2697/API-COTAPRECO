import { Router } from "express";
import {getUsers, createUser, deleteUser, updateUser} from "./controllers/UserController.js"

const routes = Router();

routes.get('/users', getUsers)
routes.post('/users',createUser)
routes.delete('/users/:id',deleteUser)
routes.put('/users/:id', updateUser) // criar rota do update


export default routes