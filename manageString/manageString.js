const fs = require('fs');
const child_process = require('child_process');

const retrocederUnaCarpeta = (direccion) => {
    let dir = direccion.split('\\');

    return dir.slice(0, dir.length - 1).join('\\');
};


const escribirArchivo = (dir, data) => new Promise((resolve, reject) => {
    fs.writeFile(dir, data, (err) => {
        if (err) reject('La direccion del fichero a escribir es incorrecta o no existe');
        resolve('data.json');
    });
});

const leerArchivo = (dir) => new Promise((resolve, reject) => {
    fs.readFile(dir, (err, data) => {
        if (err) reject('La direccion del fichero a leer es incorrecta o no existe');
        resolve(data);
    });
});

const generarDentroFichero = async(direccionFicheroEntrada, dataString) => {
    try {
        if (!fs.existsSync(direccionFicheroEntrada)) child_process.execSync(`type nul > "${direccionFicheroEntrada}"`);
    } catch (error) {
        throw new Error('La direccion del fichero es incorrecta');
    }

    await escribirArchivo(direccionFichero, dataString);

    return 'Se genero de manera correcta el archivo';

};

module.exports = {
    retrocederUnaCarpeta,
    leerArchivo,
    escribirArchivo
};