import mongoose from 'mongoose';


const { Schema } = mongoose;

const categoria = new Schema({
    nome: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('categoria', categoria)