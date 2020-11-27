const fs = require('fs');

let heroesController = {
    leerJSON: () => {
        return JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
    },
    listaHeroes: (req, res) => {
        let lista = heroesController.leerJSON();

        res.send(lista)

    },
    heroesDetalle: (req, res) => {
        let lista = heroesController.leerJSON();
        let id = req.params.id

        let heroe = lista.filter((heroe) => {
            return heroe.id == id
        });

        let heroeSelect = heroe[0]

        if (heroeSelect == undefined) {
            res.send('Éste heroe no fue encontrado :( pruebe con otro numero de id')
        } else {
            res.send(`Hola mi nombre es ${heroeSelect.nombre} y soy ${heroeSelect.profesion}`)
        }
    },
    heroesBio: (req, res) => {
        let lista = heroesController.leerJSON();
        let id = req.params.id;
        let ok = req.params.ok;
        let heroe = lista.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSelect = heroe[0]
        if (heroeSelect == undefined) {
            return res.send("No encontramos un héroe para mostrarte su biografía")
        } if (ok == "ok") {
            return res.send(`${heroeSelect.nombre} : ${heroeSelect.resenia}`)
        } else {
            return res.send(`${heroeSelect.nombre}. Lamento que no desees saber mas de mi`)
        }
    }
}

module.exports = heroesController;
