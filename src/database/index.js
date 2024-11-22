import mongoose from 'mongoose';

export default async function connectDatabase(){
    await mongoose.connect("mongodb+srv://rafaelmattos:root@cotapreco.vhirxgb.mongodb.net/?retryWrites=true&w=majority&appName=CotaPreco");
}
