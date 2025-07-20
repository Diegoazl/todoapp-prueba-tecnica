const express = require('express');
const router = express.Router();
const tareasController = require('../controllers/tareas.controller');

router.get('/tareas', tareasController.obtenerTareas);
router.post('/tareas', tareasController.crearTarea);
router.delete('/tareas/:id', tareasController.eliminarTarea);
router.put('/tareas/:id', tareasController.editarTarea);

module.exports = router;