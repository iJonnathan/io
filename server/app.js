
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configMensaje = require('./configMensaje');

const app = express();
app.use(bodyParser.json());
app.use(cors())
app.post('/contactMe', (req, res) => {
    console.log(JSON.stringify(req.body))
    if (true) {
        configMensaje(req.body.message, res);
    }
    else{
        res.status(500).send('error datos enviados!');
    }
})
app.get('/init', (req, res) => {
    console.log("JSON.stringify(req.body)")
    res.send({10:"good"})
    
})
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo')

});
