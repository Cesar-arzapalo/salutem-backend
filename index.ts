import { Server } from './classes/server';
import preguntaRoutes from './routes/pregunta';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import triajeRoutes from './routes/xFuzzy';
//rutas del la apliacion
const serverMongoDB = new Server(3000);
const serverXFuzzy = new Server(2800);
//Body parser
serverMongoDB.app.use(bodyParser.urlencoded({extended:true}));
serverMongoDB.app.use(bodyParser.json());

serverXFuzzy.app.use(bodyParser.urlencoded({extended:true}));
serverXFuzzy.app.use(bodyParser.json());

//rutas del app
serverMongoDB.app.use('/preguntas', preguntaRoutes);
serverXFuzzy.app.use('/xFuzzy',triajeRoutes);
//conectar db
mongoose.connect('mongodb+srv://aptir:p5jpCkkRMDEPQS6M@cluster0.fnwct.mongodb.net/triaje?retryWrites=true&w=majority',
                {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
                    if (err) throw err;

                    console.log('Base de datos en linea');
                });

//levantar express
serverMongoDB.start(()=> {
    console.log(`Servidor de la base de datos corriendo en el puerto ${serverMongoDB.port}`);
});

serverXFuzzy.start(()=> {
    console.log(`Servidor de XFuzzy corriendo en el puerto ${serverXFuzzy.port}`);
});