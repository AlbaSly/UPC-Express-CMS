import express from 'express';
//Importamos nuestra función que conecta a la BD
import ConnectDB from './config/database.js';
//importamos nuestro Router
import { ClientesRouter } from './routes/Routes.js';

const app = express();
//Conexión a la base de datos, debe ser una función anónima asíncrona para que espere la conexión;
(async () => {
    await ConnectDB();
})();
//Hacemos que la aplicación pueda leer archivos estáticos
app.use(express.static('./src/public'));
//Habilitamos Pug
app.set('view engine', 'pug');
//Seteamos la carpeta de views
app.set('views', './src/views');

//Habilitar lectura del body como json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//hacemos que la aplicación use nuestro Router
app.use('/', ClientesRouter);
/**
 * Llamamos a las variables en .env y las anexamos
 * a variables en index.js
 */
const PORT = process.env.PORT || 3200;
const HOST = process.env.host || '0.0.0.0';
/*
La aplicación deberá escuchar en los puertos asignados
en .env por medio de las constantes creadas (HOST, PORT)
*/
app.listen(PORT, HOST, () => {
    console.log('Aplicación Iniciada');
});