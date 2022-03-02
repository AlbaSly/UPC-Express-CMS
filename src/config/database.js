import mongoose from 'mongoose';
import dotenv from 'dotenv';
//Hacer que dotenv detecte la existencia de variables de entorno
dotenv.config();

/**
 * Función para conectar a la base de datos
 */
const ConnectDB = async () => {
    try {
        //Dirección a la base de datos
        const MongoCluster = process.env.MONGO_URI; 
        //Conexión a la base de datos por medio de mongoose
        const database = await mongoose.connect(MongoCluster, {
            //parámetros requeridos por Mongoose
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        //Simple cadena de texto representado la información sobre la base de datos
        const DB_URL = `${database.connection.host}:${database.connection.port}`;

        console.log(`BASE DE DATOS CONECTADA (MongoDB):\n${DB_URL}`);
    } catch (error) {
        //En caso de existencia de error, mostrar un mensaje notificando el error
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}
//Exportar la función 
export default ConnectDB;