import {Router} from  "express";

import { correrXFuzzy}  from "../conexion/conexionXFuzzy";
const triajeRoutes = Router();


interface triajeInputQuery {
        cantidadSintomas: number;
        gravedadSintoma: number;
        contacto: number;
        riesgo: number;
};

interface triajeOutputQuery {
    triaje?: number;
};

let getPreguntaQuery = (req: any): triajeOutputQuery => {
    let query: triajeOutputQuery = {}; 
    
    if(req.query.tj != null){
        query.triaje = Number(req.query.tj);
    }

    return query;
}

triajeRoutes.get('/' , (req, resp)=>{
    
    const consulta: triajeInputQuery = {
        cantidadSintomas: req.body.cantidad,
        gravedadSintoma : req.body.gravedad,
        contacto        : req.body.contacto,
        riesgo          : req.body.riesgo
    };
    
    resp.json({
        ok: true, 
        mensaje: correrXFuzzy(consulta.cantidadSintomas, 
                                consulta.gravedadSintoma,
                                consulta.contacto,
                                consulta.riesgo)
    });
    
});


export default triajeRoutes;