import ClienteModel from '../models/clientes.model.js';

//Volvemos nuestro controlador una función asíncrona
export const Index = async (req, res) => {
    //El método .find permite obtener todos los registros
    //Espera a que el Modelo reciba los registros
    const listadoClientes = await ClienteModel.find();
    res.render('index', {
        //Se añade la variable dentro del renderizado
        listadoClientes
    });
}

//Renderizar la vista para Crear Clientes
export const ClienteNuevoView = (req, res) => {
    res.render('ClienteAcciones', {
        method: 'POST',
        actionRoute: '/cliente-nuevo',
        accion: 'Nuevo Cliente'
    })
}

//Del método POST para crear clientes
export const CrearCliente = (req, res) => {
    //El cliente se obtiene del body de la petición (req),
    //cuya información se consigue del formulario en ClienteAcciones.pug
    const cliente = req.body;
    //Función asíncrona
    (async () => {
        try {
            //Espera a que se cree el nuevo cliente
            await new ClienteModel(cliente).save();
            //Redirige a '/'
            res.redirect('/');
        } catch (error) {
            //En caso de error mandar un  json con el error
            res.status(403).json({
                msg: error
            });
        }
    })();
}