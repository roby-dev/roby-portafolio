require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT , () =>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});