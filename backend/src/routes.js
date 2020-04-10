const express = require('express');

const OngController = require('./controllers/ongController')
const IncidentsController = require('./controllers/incidentController')
const ProfilesController = require('./controllers/ProfileController')
const SessionsController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfilesController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete ('/incidents/:id', IncidentsController.delete);

module.exports = routes;