const fs = require('fs');

let home = {
    leerJSON: () => {
        return JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
    },
    concesionarias: (req, res) => {
        let lista = home.leerJSON();
     let sucursales = lista.map((suc)=>{
         return suc.sucursal;
     });

    },
    bienvenida: (req, res) => {
        let lista = home.leerJSON();
        let sucursales = lista.map((suc)=>{
            return suc.sucursal;
        });
        res.send(`Bienvenido a nuestro sitio web! Aqui encontrarás la mayor variedad de autos del mercado. Conoce nuestras Concesionarias ${sucursales.join(' - ')}`)

    },
    


};

module.exports = home;
