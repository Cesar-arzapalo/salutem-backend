const { leerResultado, escribirParametros } = require('./conexionData');
const { retrocederUnaCarpeta } = require('../manageString/manageString');

import {execSync} from "child_process";

const pathRaiz = retrocederUnaCarpeta(__dirname.toString());

const direccionXFuzzyBaseEjecutable = `${pathRaiz}\\salutem\\salutem.java`;;

const comnadoXFuzzy = `java -jar "${direccionXFuzzyBaseEjecutable}"`;

const esperaTiempo = (time: number) => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(`pasaron ${time} segundos`);
    }, time * 1000);

});

export const correrXFuzzy = async(cantidadSintomas: number, gravedadSintoma: number, contacto: number, riesgo:number) => {

    console.log(cantidadSintomas, gravedadSintoma, contacto, riesgo);
    console.log(1);
    //escribe los datos de entrada
    await escribirParametros(cantidadSintomas, gravedadSintoma, contacto, riesgo);
    console.log(2);
    //ejecuta xFuzzy
    
    console.log(comnadoXFuzzy);
    const comando = await execSync(comnadoXFuzzy).toString();

    //muestra el resultado de xFuzzy
    console.log(comando);

    return await leerResultado();
    //muestra el resultadodel cierre del comando
    //console.log(comando);

    //await esperaTiempo(1);

};

module.exports = {
    correrXFuzzy
};