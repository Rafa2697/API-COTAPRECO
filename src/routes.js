import { Router } from "express";
import {getUsers, createUser, deleteUser, updateUser, loginUser} from "./controllers/UserController.js"
import {getCity, createCity, deleteCity} from './controllers/cityController.js'

const routes = Router();
//CRUD de usuarios
routes.get('/users', getUsers)
routes.post('/users',createUser)
routes.delete('/users/:id',deleteUser)
routes.put('/users/:id', updateUser) 
//endpoint login
routes.post('/login', loginUser)

//endpoint cidade
routes.get('/cities', getCity)
routes.post('/cities', createCity)
routes.delete('/cities/:id',deleteCity)


export default routes