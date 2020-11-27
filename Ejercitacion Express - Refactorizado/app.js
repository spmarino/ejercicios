
const express = require('express');

const fs = require('fs');

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

////////////////////////////////////////////////////////////////////////////

const mainRouter = require('./Routes/main');

const heroesRouter = require('./Routes/heroes');

const creditosRouter = require('./Routes/creditos')

////////////////////////////////////////////////////////////////////////////

app.use('/', mainRouter);

app.use('/heroes', heroesRouter);

app.use('/heroes/detalle/:id', heroesRouter);

app.use('/heroes/bio/:id/:ok?', heroesRouter)

app.use('/creditos', creditosRouter)