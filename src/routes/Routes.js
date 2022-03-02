import { Router } from "express";
//Importar la funciones del controlador
import { 
    Index, 
    CrearCliente, 
    ClienteNuevoView } from "../controllers/clientes.controller.js";

export const ClientesRouter = Router();

ClientesRouter.get('/', Index);

/*Ruta para obtener la vista de ClienteAcciones configurado para CrearClientes */
ClientesRouter.get('/cliente-nuevo', ClienteNuevoView);
/*Ruata para crear un nuevo cliente*/
ClientesRouter.post('/cliente-nuevo', CrearCliente);