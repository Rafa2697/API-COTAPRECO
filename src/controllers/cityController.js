import City from '../models/cidade.js';

async function getCity(request, response){
  const city = request

  return request
}

async function createCity(request, response){
    const city = request.body
    const newCity= await City.create(city)

    return response.status(201).json(newCity)
    
    
}


export {getCity,createCity}