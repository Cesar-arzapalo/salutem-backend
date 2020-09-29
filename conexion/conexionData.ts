const { retrocederUnaCarpeta, leerArchivo, escribirArchivo } = require('../manageString/manageString');


const pathRaiz = retrocederUnaCarpeta(__dirname.toString());
const direccionDatoEntrada = `${pathRaiz}\\salutem\\input.txt`;
const direccionDatoSalida = `${pathRaiz}\\salutem\\output.txt`;

const leerResultado = async() => {

    let archivoString = (await leerArchivo(direccionDatoSalida)).toString();
    archivoString = archivoString.split('\r\n');
    archivoString = archivoString.slice(0, archivoString.length - 1).map((data:string) => Number.parseFloat(data))[0];

    return archivoString;
};

const escribirParametros = async(cantidadSintomas: number, gravedadSintoma: number, contacto: number, riesgo: number) => {
    const data = [String(cantidadSintomas), String(gravedadSintoma), String(contacto), String(riesgo)];
    return await escribirArchivo(direccionDatoEntrada,  data.join('\n'));
};

module.exports = {
    leerResultado,
    escribirParametros
};
