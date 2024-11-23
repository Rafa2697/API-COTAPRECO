import { Router } from "express";
import { getUsers, createUser, deleteUser, updateUser, loginUser } from "./controllers/UserController.js"
import { getCity, createCity, deleteCity } from './controllers/cityController.js';
import { createEstabli, getEstabli, deleteEstabli, updateEstabli } from './controllers/establishmentController.js';
import {createProduct, getProduct, deleteProduct, updateProduct } from './controllers/productController.js'
import {getCat, createCat, deleteCat, updateCat} from './controllers/catController.js'

const routes = Router();
//CRUD de usuarios
routes.get('/users', getUsers)
routes.post('/users', createUser)
routes.delete('/users/:id', deleteUser)
routes.put('/users/:id', updateUser)
//endpoint login
routes.post('/login', loginUser)

//endpoint cidade
routes.get('/cities', getCity)
routes.post('/cities', createCity)
routes.delete('/cities/:id', deleteCity)

//endpoint estabelecimentos
routes.get('/establishments', getEstabli)
routes.post('/establishments', createEstabli)
routes.delete('/establishments/:id', deleteEstabli)
routes.put('/establishments/:id', updateEstabli) 

//endpoint produtos
routes.get('/product', getProduct)
routes.post('/product', createProduct)
routes.delete('/product/:id', deleteProduct)
routes.put('/product/:id', updateProduct) 

//endpoint categoria
routes.get('/category', getCat)
routes.post('/category', createCat)
routes.delete('/category/:id', deleteCat)
routes.put('/category/:id', updateCat) 

export default routes