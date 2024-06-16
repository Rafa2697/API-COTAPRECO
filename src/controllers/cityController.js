import City from '../models/cidade.js';

async function getCity(request, response){
  const cities = await City.find();
  return response.status(200).json(cities);
}

async function createCity(request, response){
    const city = request.body
    const newCity= await City.create(city)

    return response.status(201).json(newCity)
}

async function deleteCity(request, response){
  const id = request.params.id
  await City.findByIdAndDelete({_id: id})

  return response.status(200).json({response: "cidade deletada"})
}


export {getCity,createCity, deleteCity}