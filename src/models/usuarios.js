
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

userSchema.methods.validarSenha = async function(senhaCandidata) {
    return await bcrypt.compare(senhaCandidata, this.senha);
  };

export default mongoose.model('user', userSchema)