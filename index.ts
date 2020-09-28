import { Server } from './classes/server';
import preguntaRoutes from './routes/pregunta';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//rutas del la apliacion
const server = new Server();

//Body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//rutas del app
server.app.use('/preguntas', preguntaRoutes);

//conectar db
mongoose.connect('mongodb+srv://aptir:p5jpCkkRMDEPQS6M@cluster0.fnwct.mongodb.net/triaje?retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
                    if (err) throw err;

                    console.log('Base de datos en linea');
                });

//levantar express
server.start(()=> {
    console.log(`Corriendo en el puerto ${server.port}`);
});
