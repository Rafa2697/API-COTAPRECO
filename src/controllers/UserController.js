import User from '../models/usuarios.js'

async function getUsers(request, response){
    const nome = request.query.nome;
    const ra = request.query.ra; // Adicione outros parâmetros aqui, se necessário
    
    // Crie um objeto de filtro com os parâmetros desejados
    const filter = {};
    if (nome) {
        filter.nome = new RegExp(`^${nome}$`, "i");
    }
    if (ra) {
        filter.ra = ra;
    }
    // Adicione outros campos aqui, se necessário
    
    const users = await User.find(filter);
    
    if (users.length === 0) {
        return response.status(404).json({ error: "Nenhum usuário encontrado com os parâmetros especificados." });
    }
    
    return response.status(200).json(users);
}

async function createUser(request, response){
    const user = request.body
    const newUser = await User.create(user)

    return response.status(201).json(newUser)
}

async function deleteUser(request, response){
    const id = request.params.id
    await User.findByIdAndDelete({_id: id})

    return response.status(200).json({response: "user deleted"})
}

async function updateUser(request, response){
    const {userData} = request.body
    const id = request.params.id

 
    await User.findByIdAndUpdate(id, userData, {new: true})

    return response.status(200).json({response: "update user"})
}

export {getUsers,createUser, deleteUser, updateUser}