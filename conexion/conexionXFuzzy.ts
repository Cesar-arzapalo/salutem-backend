const { leerResultado, escribirParametros } = require('./conexionData');
const { retrocederUnaCarpeta } = require('../manageString/manageString');

import {execSync} from "child_process";

const pathRaiz = retrocederUnaCarpeta(retrocederUnaCarpeta(__dirname.toString()));

const direccionXFuzzyBaseEjecutable = `${pathRaiz}\\salutem\\salutem.jar`;;

const comnadoXFuzzy = `java -jar "${direccionXFuzzyBaseEjecutable}"`;

const esperaTiempo = (time: number) => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(`pasaron ${time} segundos`);
    }, time * 1000);

});

export const correrXFuzzy = async(cantidadSintomas: number, gravedadSintoma: number, contacto: number, riesgo:number) => {
    //escribe los datos de entrada
    await escribirParametros(cantidadSintomas, gravedadSintoma, contacto, riesgo);
    //ejecuta xFuzzy
    const comando = await execSync(comnadoXFuzzy).toString();
    //muestra el resultado de xFuzzy
    return Number(comando.split(' ')[0]);

};

module.exports = {
    correrXFuzzy
};