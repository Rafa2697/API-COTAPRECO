import mongoose from 'mongoose';


const { Schema } = mongoose;


const establishmentSchema = new Schema({
    nome: String,
    endereco: String,
    cidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cidade'
    },
    categoria:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('establishment', establishmentSchema)