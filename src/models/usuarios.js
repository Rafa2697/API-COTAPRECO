
import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    nome: String,
    ra: String,
    email: String,
    senha: String,
    tipo: String,
    createdAt:{
        type: Date,
        default: Date.now()
    }
})


export default mongoose.model('user', userSchema)