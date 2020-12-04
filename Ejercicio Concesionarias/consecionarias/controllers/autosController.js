const fs = require('fs');
let lista = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

let autosSucursal = lista.map((suc) => {
    return (suc.autos);
});

let autos = [...autosSucursal[0], ...autosSucursal[1], ...autosSucursal[2], ...autosSucursal[3], ...autosSucursal[4]]

let listaTotal = {

    listaDeAutos: (req, res) => {


        res.send('Contamos con la siguiente variedad de autos' + JSON.stringify(autos))
    },

    autoSeleccionado: (req, res) => {
        
            let id = req.params.id; // capturo el id que llega por parametro en la ruta como :id
           // traigo toda la lista de productos
            let auto; // creo una variable producto, sin asignarle ningun valor todavía
    
            autos.forEach((prod) => { // recorro el array de productos
                if(prod.id == id) { // si el id del producto es igual al id que nos llega por parametro...
                    producto =  { // a la variable producto le asignamos un valor, un objeto literal con el nombre y precio del producto
                        nombre: prod.name,
                        precio: prod.price
                    
                
    
    

    }
}

module.exports = listaTotal;