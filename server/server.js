const express = require('express');
const path = require('path');
const app = express();

const tooMuchRouter = require('./routes/router.too.much');

const PORT = 9595;

app.use(express.static(`${__dirname}/../build`));
app.use('/toomuch',tooMuchRouter);


app.listen(PORT,() => console.log(`Listening on ${PORT}...`));