let tareas = [];
let idCounter = 1;

exports.obtenerTareas = (req, res) => {
  res.json(tareas);
};

exports.crearTarea = (req, res) => {
  const { texto } = req.body;
  if (!texto || texto.trim() === '') {
    return res.status(400).json({ mensaje: 'El texto no puede estar vacío' });
  }
  const nuevaTarea = { id: idCounter++, texto };
  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
};

exports.eliminarTarea = (req, res) => {
  const { id } = req.params;
  const idNumerico = parseInt(id);
  const index = tareas.findIndex((t) => t.id === idNumerico);
  if (index === -1) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }
  tareas.splice(index, 1);
  res.status(204).send();
};

exports.editarTarea = (req, res) => {
  const { id } = req.params;
  const { texto } = req.body;
  if (!texto || texto.trim() === '') {
    return res.status(400).json({ mensaje: 'El texto no puede estar vacío' });
  }
  const tarea = tareas.find((t) => t.id === parseInt(id));
  if (!tarea) return res.status(404).json({ mensaje: 'Tarea no encontrada' });

  tarea.texto = texto;
  res.json(tarea);
};