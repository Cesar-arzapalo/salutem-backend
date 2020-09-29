import {writeFile,readFile} from "fs";

const retrocederUnaCarpeta = (direccion: string) => {
    let dir = direccion.split('\\');

    return dir.slice(0, dir.length - 1).join('\\');
};


const escribirArchivo = (dir: string, data:any) => new Promise((resolve, reject) => {
    writeFile(dir, data, (err: any) => {
        if (err) reject('La direccion del fichero a escribir es incorrecta o no existe');
        resolve('data.json');
    });
});

const leerArchivo = (dir: string) => new Promise((resolve, reject) => {
    readFile(dir, (err, data) => {
        if (err) reject('La direccion del fichero a leer es incorrecta o no existe');
        resolve(data);
    });
});


module.exports = {
    retrocederUnaCarpeta,
    leerArchivo,
    escribirArchivo
};