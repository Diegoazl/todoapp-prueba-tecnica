import React from 'react';
import '../styles/App.css';

const ListaTareas = ({ tareas, alEliminar, alEditar }) => {
  return (
    <div className="lista-tareas">
      {tareas.length === 0 ? (
        <p className="mensaje-info">No hay tareas registradas.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id} className="item-tarea">
              <span>{tarea.texto}</span>
              <div className="botones-tarea">
                <button
                  onClick={() => {
                    const confirmar = window.confirm('¿Deseas editar esta tarea?');
                    if (confirmar) alEditar(tarea);
                  }}
                  className="btn-editar"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => {
                    const confirmar = window.confirm('¿Deseas eliminar esta tarea?');
                    if (confirmar) alEliminar(tarea.id);
                  }}
                  className="btn-eliminar"
                >
                  🗑️ Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaTareas;
