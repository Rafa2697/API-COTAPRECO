import mongoose from 'mongoose';


const { Schema } = mongoose;


const citySchema = new Schema({
    nome: String,
    estado: String,
    pais: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('city', citySchema)