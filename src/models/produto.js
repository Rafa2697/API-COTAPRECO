import mongoose from 'mongoose';


const { Schema } = mongoose;


const productSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String,
    estabelecimento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estabelecimento'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('product', productSchema)