const fs = require("fs");


let sucursales = {
    leerJSON: () => {
        return JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
    },

    concesionarias: (req, res) => {
        let lista = sucursales.leerJSON();
        let listaSucursales = lista.map((suc) => {
            return (` - ${suc.sucursal} - ${suc.direccion} - ${suc.telefono}  `);
        });
        res.send("Lista de Concesionarias" + listaSucursales.join(' '))
    },

    detalle: (req, res) => {

        let lista = sucursales.leerJSON();
        let id = req.params.id.toLowerCase()
        
        let concesionariaDetalle = lista.filter((suc) => {
            return suc.sucursal.toLowerCase() == id
        });

        let sucursalSelec = concesionariaDetalle[0]

        if (sucursalSelec == undefined) {
            res.send('Ésta concesionaria no existe')
        } else {
            res.send(`${sucursalSelec.sucursal} - ${sucursalSelec.direccion} - ${sucursalSelec.telefono}`)
        }
    }
}


module.exports = sucursales;