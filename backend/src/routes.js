const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

//Ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.store);

//Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Profile
routes.get('/profiles', ProfileController.index);

//Sessions
routes.post('/sessions', SessionController.create);

module.exports = routes;