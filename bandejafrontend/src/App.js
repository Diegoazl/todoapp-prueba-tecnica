import React, { useEffect, useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';
import { obtenerTareas, crearTarea, eliminarTarea, editarTarea } from './services/tareasApi';
import './styles/App.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaActual, setTareaActual] = useState(null);

  const cargarTareas = async () => {
    const tareasServidor = await obtenerTareas();
    setTareas(tareasServidor);
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const agregarTarea = async (texto) => {
    const nueva = await crearTarea({ texto });
    setTareas([...tareas, nueva]);
  };

  const eliminarTareaPorId = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar esta tarea?');
    if (!confirmar) return;

    await eliminarTarea(id);
    setTareas(tareas.filter((t) => t.id !== id));
  };

  const activarEdicion = (tarea) => {
    const confirmar = window.confirm('¿Deseas editar esta tarea?');
    if (!confirmar) return;

    setModoEdicion(true);
    setTareaActual(tarea);
  };

  const actualizarTarea = async (id, nuevoTexto) => {
    const tareaActualizada = await editarTarea(id, { texto: nuevoTexto });
    const nuevasTareas = tareas.map((t) =>
      t.id === id ? { ...t, texto: tareaActualizada.texto } : t
    );
    setTareas(nuevasTareas);
    setModoEdicion(false);
    setTareaActual(null);
  };

  return (
    <div className="app-contenedor">
      <h1>📝 <strong>TodoApp - Prueba Técnica</strong></h1>
      <p className="instrucciones">Agrega, edita o elimina tareas fácilmente. ¡Organiza tu día!</p>

      <FormularioTarea
        alAgregar={agregarTarea}
        alActualizar={actualizarTarea}
        modoEdicion={modoEdicion}
        tareaActual={tareaActual}
      />

      <h2>📄 <strong>Mis Tareas</strong></h2>
      <ListaTareas
        tareas={tareas}
        alEliminar={eliminarTareaPorId}
        alEditar={activarEdicion}
      />
    </div>
  );
}

export default App;
