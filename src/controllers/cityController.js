import City from '../models/cidade.js';

async function getCity(request, response){
  const cities = request

  console.log(request)
}

async function createCity(request, response){
    const city = request.body
    const newCity= await City.create(city)

    return response.status(201).json(newCity)
    
    
}


export {getCity,createCity}