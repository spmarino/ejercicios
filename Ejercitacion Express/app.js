// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/',(req, res)=>{
	res.send('Ni superman, Iron Mam o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!')
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let id = req.params.id

	let heroe = heroes.filter((heroe)=>{
		return heroe.id == id
	});

	let heroeSelect = heroe[0]

	if (heroeSelect == undefined){
		res.send('Éste heroe no fue encontrado :( pruebe con otro numero de id')
	}else{
		res.send(`Hola mi nombre es ${heroeSelect.nombre} y soy ${heroeSelect.profesion}`)
	}
	
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let id = req.params.id;
	let ok = req.params.ok;
	let heroe = heroes.filter((heroe)=>{
		return heroe.id == id
	});

	let heroeSelect = heroe[0]

	if (heroeSelect == undefined){
		return res.send("No encontramos un héroe para mostrarte su biografía")
	}if(ok == "ok"){
		return res.send(`${heroeSelect.nombre} : ${heroeSelect.resenia}`)
	}else{
		return res.send(`${heroeSelect.nombre}. Lamento que no desees saber mas de mi`)
	}});

	app.get('/creditos',(req, res)=>{
		res.send("Pagina creada por la comision 5")
	});
	