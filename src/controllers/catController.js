import categoria from "../models/categoria.js";

async function getCat(request, response){
    const cats = await categoria.find();
    return response.status(200).json(cats);
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

export {getCat,createCat, deleteCat}