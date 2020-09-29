import {Router} from  "express";
import { Pregunta } from '../models/pregunta.model';
import { Document } from 'mongoose';

const preguntaRoutes = Router();


interface PreguntaQuery {
        descripcion?: String;
        tipoAlternativa?: Number;
        tipoVariable?: String;
        alternativas?: [String];
        nroPagina?: Number;
        peso?: Number;
        pesoAlternativas?: [Number];
};

let getPreguntaQuery = (req: any): PreguntaQuery => {
    let query: PreguntaQuery = {}; 
    
    if(req.query.nro != null){
        query.nroPagina = Number(req.query.nro);
    }

    if(req.query.tipo != null){
        query.tipoVariable = String(req.query.tipo);
    }

    if(req.query.tipo_alt != null){
        query.tipoAlternativa = Number(req.query.tipo_alt);
    }

    if(req.query.desc != null){
        query.descripcion = String(req.query.desc);
    }

    if(req.query.array_alt != null){
        query.alternativas = req.query.array_alt;
    }

    if(req.query.desc != null){
        query.peso = Number(req.query.peso);
    }

    if(req.query.array_alt != null){
        query.pesoAlternativas = req.query.array_pes;
    }

    return query;
}

preguntaRoutes.get('/' , (req, resp)=>{
    
    let query: PreguntaQuery = getPreguntaQuery(req);
    
    Pregunta.find(query)
        .then(preguntaDB => resp.json({ok: true, mensaje: preguntaDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

});



preguntaRoutes.post('' , (req, resp)=>{
    
    const pregunta = {
        descripcion       : req.body.descripcion,
        tipoAlternativa   : req.body.tipoAlternativa,
        tipoVariable      : req.body.tipoVariable,
        alternativas      : req.body.alternativas,
        nroPagina         : req.body.nroPagina,
        peso              : req.body.peso,
        pesoAlternativas  : req.body.pesoAlternativas
    };

    Pregunta.create(pregunta)
        .then(preguntaDB => resp.json({ok: true, mensaje: preguntaDB }) )
        .catch(err => resp.json({ok: false, mensaje: err }));

    
});

preguntaRoutes.put('' , (req, resp)=>{
    
    let query: PreguntaQuery = getPreguntaQuery(req);

    console.log(query);
    
    console.log(req.query);

    Pregunta.findByIdAndUpdate(req.query.id, query, {new: true}, (err, preguntaDB) => {
        if ( err ) throw err;
        if (!preguntaDB) {
            resp.json({ok: false, mensaje: "No existe una pregunta con ese ID" });
        } else {
            resp.json({ok: true, mensaje: preguntaDB });
        }

    })
    
});

preguntaRoutes.delete('' , (req, resp)=>{
    

    Pregunta.findByIdAndDelete(req.query.id, (err, preguntaDB) => {
        if ( err ) throw err;
        if (!preguntaDB) {
            resp.json({ok: false, mensaje: "No existe una pregunta con ese ID" });
        } else {
            resp.json({ok: true, mensaje: preguntaDB });
        }
    })
    
});


export default preguntaRoutes;