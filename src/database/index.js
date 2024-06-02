import mongoose from 'mongoose'


async function connectDatabase(){
  await  mongoose.connect('mongodb+srv://rafaelmattos:root@cotapreco.vhirxgb.mongodb.net/?retryWrites=true&w=majority&appName=CotaPreco')
}

export default connectDatabase;