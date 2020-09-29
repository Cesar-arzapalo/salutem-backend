import {Router} from  "express";

import { correrXFuzzy}  from "../conexion/conexionXFuzzy";
const triajeRoutes = Router();


class TriajeInputQuery {
    constructor(public cantidadSintomas: number,
                public gravedadSintoma: number,
                public contacto: number,
                public riesgo: number){
    }
};

interface TriajeOutputQuery {
    triaje?: number;
};

let getPreguntaQuery = (req: any): TriajeOutputQuery => {
    let query: TriajeOutputQuery = {}; 
    
    if(req.query.tj != null){
        query.triaje = Number(req.query.tj);
    }
    return query;
}

let getTirajeInputQuery = (req: any): TriajeInputQuery => {
    const query: TriajeInputQuery = new TriajeInputQuery(
        Number(req.query.cantidad),
        Number(req.query.gravedad),
        Number(req.query.contacto),
        Number(req.query.riesgo)
    );
    return query;
}

triajeRoutes.get('/' , (req, resp)=>{
    const consulta: TriajeInputQuery = getTirajeInputQuery(req);
    
    correrXFuzzy(consulta.cantidadSintomas , 
                consulta.gravedadSintoma,
                consulta.contacto,
                consulta.riesgo)
        .then(res => resp.json({ok: true, valorTriaje: res}))
        .catch(err => resp.json({ok: false, mensaje: err}))
    
    
});


export default triajeRoutes;