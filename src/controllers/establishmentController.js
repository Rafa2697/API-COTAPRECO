import Establishment from '../models/estabelecimento.js'

async function getEstabli(request, response){
    const establishments = await Establishment.find();
    return response.status(200).json(establishments);
  }
  
  async function createEstabli(request, response){
      const establishment = request.body
      const newEstablishment = await Establishment.create(establishment)
      
      return response.status(201).json(newEstablishment)
      
  }
  
  async function deleteEstabli(request, response){
    const id = request.params.id
    await Establishment.findByIdAndDelete({_id: id})
  
    return response.status(200).json({response: "cidade deletada"})
  }
  
  
  export {createEstabli, getEstabli, deleteEstabli}