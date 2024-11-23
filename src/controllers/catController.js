import { response } from "express";
import categoria from "../models/categoria.js";

async function getCat(request, response){
    const cats = await categoria.find();
    return response.status(200).json(cats);
}

async function getCatId(request, response){
    const id = request.params.id
    const cat = await categoria.findById(id)

    return response.status(200).json(cat)
}

async function createCat(request, response){
    const cat = request.body
    const newCat= await categoria.create(cat)

    return response.status(201).json(newCat)
}

async function deleteCat(request, response){
    const id = request.params.id
    await categoria.findByIdAndDelete({_id: id})

    return response.status(200).json({response: "categoria deletada"})
}

async function updateCat(request, reponse){
    const cat = request.body
    const id = request.params.id

    await categoria.findByIdAndUpdate(id, cat, {
        new: true,
        runValidators: true
    })

    return response.status(200).json({response: "categoria atualizada"})
}

export {getCat,createCat, deleteCat, updateCat, getCatId}