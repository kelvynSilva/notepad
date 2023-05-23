const express = require('express');
const routes = express.Router();

const AnnotationsControllers = require("./controllers/AnnotationControllers")
const PriorityControllers = require("./controllers/PriorityControllers")
const ContentControllers = require("./controllers/ContentControllers");

//Rota Annotations
routes.post('/annotations', AnnotationsControllers.create);
routes.get('/annotations', AnnotationsControllers.read);
routes.delete('/annotations/:id', AnnotationsControllers.delete);

//Rota Priority
routes.get('/priorities', PriorityControllers.read);
routes.post('/priorities/:id', PriorityControllers.update);

//Rota Content
routes.post('/content/:id', ContentControllers.update);
module.exports = routes

