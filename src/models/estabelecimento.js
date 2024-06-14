import mongoose from 'mongoose';


const { Schema } = mongoose;


const establishmentSchema = new Schema({
    nome: String,
    endereco: String,
    cidade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cidade'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('establishment', establishmentSchema)