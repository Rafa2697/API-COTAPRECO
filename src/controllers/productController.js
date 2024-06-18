import Product from '../models/produto.js'

async function getProduct(request, response) {
    const product = await Product.find();
    return response.status(200).json(product);
}

async function createProduct(request, response) {
    const product = request.body
    const newProduct = await Product.create(product)

    return response.status(201).json(newProduct)

}

async function updateProduct(request, response) {
    const product = request.body
    const id = request.params.id
    
    await Product.findByIdAndUpdate(id, product, { 
        new: true ,
        runValidators: true
    })

    return response.status(200).json({ response: "Produto atualizado" })
}

async function deleteProduct(request, response) {
    const id = request.params.id
    await Product.findByIdAndDelete({ _id: id })

    return response.status(200).json({ response: "Produto deletado" })
}


export { createProduct, getProduct, deleteProduct, updateProduct }