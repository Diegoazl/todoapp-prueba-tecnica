import React from 'react';

const TareaItem = ({ tarea, onEliminar, onEditar }) => {
  const handleEliminar = () => {
    const confirmar = window.confirm('¿Seguro que deseas eliminar esta tarea?');
    if (confirmar) {
      onEliminar(tarea.id);
    }
  };

  return (
    <div className="tarea-item">
      <span>{tarea.texto}</span>
      <div className="acciones">
        <button className="btn-eliminar" onClick={handleEliminar}>
          🗑 Eliminar
        </button>
        <button className="btn-editar" onClick={() => onEditar(tarea)}>
          ✏️ Editar
        </button>
      </div>
    </div>
  );
};

export default TareaItem;
