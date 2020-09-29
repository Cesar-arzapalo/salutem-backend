import {Schema, model, Document} from 'mongoose';

const preguntaSchema  =new Schema({
    descripcion: {
        type: String,
        required: [true,'La descripcion de la pregunta es necesario']
    },
    tipoAlternativa:{
        type: Number,
        required: [true,'El tipoAlternativa de la pregunta es necesario']
    },
    tipoVariable:{
        type: String,
        required: [true,'El TipoVariable de la pregunta es necesario']
    },
    alternativas:{
        type: [String],
        required: [true,'El arreglo alterantivas de la pregunta es necesario']
    },
    nroPagina:{
        type: Number
    },
    peso:{
        type: Number
    },
    pesoAlternativas:{
        type: [Number]
    }
});

interface IPregunta extends Document {
    descripcion: String;
    tipoAlternativa: Number;
    tipoVariable: String;
    alternativas: [String];
    nroPagina: Number;
    peso: Number;
    pesoAlternativas: [Number];
};

export const Pregunta = model<IPregunta>('preguntas', preguntaSchema);