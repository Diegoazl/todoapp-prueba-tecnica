const express = require('express');
const cors = require('cors');
const tareasRoutes = require('./routes/tareas.routes');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(tareasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
