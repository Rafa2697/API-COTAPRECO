import categoria from "../models/categoria.js";

async function getCat(request, response){
    const id = request.params.id
    let cat;
    if(id){
        cat = await categoria.findById(id)
        if(!cat){
            return response.status(404).json({response: "categoria não encontrada"})
        }
    }else{
        cat = await categoria.find();
    }
    
    return response.status(200).json(cat);
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

export {getCat,createCat, deleteCat, updateCat}