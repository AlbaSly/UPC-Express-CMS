import mongoose from "mongoose";

const ClienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    empresa: {
        type: String,
        required: true,
        trim: true
    }
});

//Crear el Modelo y asignarlo al nombre de la collección en la base de datos de Mongo
//Y proporcionar el schema a utilizar
const ClienteModel = mongoose.model('Clientes', ClienteSchema);
export default ClienteModel;