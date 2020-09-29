const { retrocederUnaCarpeta, leerArchivo, escribirArchivo } = require('../manageString/manageString');


const pathRaiz = retrocederUnaCarpeta(__dirname.toString());
const direccionDatoEntrada = `${pathRaiz}\\salutem\\input.txt`;
const direccionDatoSalida = `${pathRaiz}\\sallutem\\output.txt`;

const leerResultado = async() => {

    let archivoString = (await leerArchivo(direccionDatoSalida)).toString();
    console.log(archivoString);
    archivoString = archivoString.split('\n');
    console.log(archivoString);
    archivoString = archivoString.map( (data:string) => data.split('').filter(data => data !== ''));
    archivoString = archivoString.slice(0, archivoString.length - 1).map((data:string) => Number.parseInt(data));

    console.log(archivoString);
    return archivoString;
};

const escribirParametros = async(cantidadSintomas: number, gravedadSintoma: number, contacto: number, riesgo: number) => {
    const data = [String(cantidadSintomas), String(gravedadSintoma), String(contacto), String(riesgo)];
    console.log(direccionDatoEntrada);
    return await escribirArchivo(direccionDatoEntrada,  data.join('\n'));
};


module.exports = {
    leerResultado,
    escribirParametros
};
