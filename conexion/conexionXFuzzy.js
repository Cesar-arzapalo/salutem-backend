const { leerResultado, escribirParametros } = require('./conexionData');

const child_process = require('child_process');

const comnadoXFuzzy = `javac "${direccionXFuzzyBaseEjecutable}"`;

const esperaTiempo = (time) => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(`pasaron ${time} segundos`);
    }, time * 1000);

});


const correrXFuzzy = async(cantidadSintomas, gravedadSintoma, contacto, riesgo) => {

    //console.log(cantidadSintomas, gravedadSintoma, contacto, riesgo);

    //escribe los datos de entrada
    await escribirParametros(cantidadSintomas, gravedadSintoma, contacto, riesgo);

    //ejecuta xFuzzy
    const comando = await child_process.execSync(comnadoXFuzzy).toString();

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