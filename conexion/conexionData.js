const { retrocederUnaCarpeta, leerArchivo, escribirArchivo } = require('../manageString/manageString');


const pathRaiz = retrocederUnaCarpeta(__dirname.toString());
const direccionDatoEntrada = `${pathRaiz}\\salutem\\input.txt`;
const direccionDatoSalida = `${pathRaiz}\\sallutem\\output.txt`;

const leerResultado = async() => {

    let archivoString = (await leerArchivo(direccionDatoSalida)).toString();
    console.log(archivoString);
    archivoString = archivoString.split('\n');
    console.log(archivoString);
    archivoString = archivoString.map(data => data.split('').filter(data => data !== ''));
    archivoString = archivoString.slice(0, archivoString.length - 1).map(data => Number.parseInt(data));


    return cantidadPatrones;
};

const escribirParametros = async(cantidadSintomas, gravedadSintoma, contacto, riesgo) => {
    const data = [String(cantidadSintomas), String(gravedadSintoma), String(contacto), String(riesgo)];
    return await escribirArchivo(direccionDatoEntrada, [cantidad, data.join('\n')]);
};

const cerrarExcel = async() => {
    return workbook.xlsx.writeFile(direccionExcel);
};

// leerResultado(direccionExcel)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// escribirParametros(direccionExcel, patrones, presupuesto, demandaInsatisfecha, demandaTotal)
//     .then(resp => console.log('Se escribio de manera correcta los datos'))
//     .catch(err => console.log(err));

module.exports = {
    leerResultado,
    escribirParametros,
    cerrarExcel
};