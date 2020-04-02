const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store);

//incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.post('/sessions', SessionController.create);

module.exports = routes;