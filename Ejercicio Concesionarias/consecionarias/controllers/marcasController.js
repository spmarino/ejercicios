const fs = require('fs');
let lista = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let autosSucursal = lista.map((suc) => {
    return (suc.autos);
});

let autos = [...autosSucursal[0], ...autosSucursal[1], ...autosSucursal[2], ...autosSucursal[3], ...autosSucursal[4]]


let marcas = {

    listaDeMarcas: (req, res) => {

        let marcasTotal = autos.map(function (auto) {
            return auto.marca
        })

        let result = marcasTotal.filter((item, index) => {
            return marcasTotal.indexOf(item) === index;
        })

        res.send(`Elegí entre nuestra gran variedad de Marcas ${result.join(' - ').toUpperCase()}`)
    },

    marcaSeleccionada: (req, res) => {
       
        let id = req.params.id.toLowerCase()
          
        let marcaDetalle = autos.filter((auto) => {
            return auto.marca.toLowerCase() == id
        });

        if (marcaDetalle [0]  == undefined) {
            res.send('Momentaneamente no trabajamos con esa marca')
        } else {

            res.send(`Actualmente tenemos éstos autos de la marca ${id.toUpperCase()} ${JSON.stringify(marcaDetalle)}`)
            
        }
    }
}

module.exports = marcas