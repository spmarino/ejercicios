//Corriendo Servidor

const express = require ('express');
const app = express ();
app.listen (3000, () => console.log ('Servidor Corriendo'));

///////////////////////////////////////////////////////////

//Rutas

const homeRoutes = require('./routes/home')
const sucursalRouter = require('./routes/sucursales')
const marcasRouter = require('./routes/marcas')
const autosRouter = require('./routes/autos')

app.use('/', homeRoutes)
app.use('/sucursales', sucursalRouter)
app.use('/sucursales/:id', sucursalRouter)
app.use('/marcas', marcasRouter)
app.use('/autos', autosRouter)
app.use('/marcas/:id', marcasRouter)
