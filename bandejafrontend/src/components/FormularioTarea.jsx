import React, { useEffect, useState } from 'react';
import '../styles/App.css';

const FormularioTarea = ({ alAgregar, alActualizar, modoEdicion, tareaActual }) => {
  const [texto, setTexto] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (modoEdicion && tareaActual) {
      setTexto(tareaActual.texto);
    } else {
      setTexto('');
    }
  }, [modoEdicion, tareaActual]);

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!texto.trim()) {
      setError('El campo no puede estar vacío');
      return;
    }

    if (modoEdicion) {
      alActualizar(tareaActual.id, texto);
    } else {
      alAgregar(texto);
    }

    setTexto('');
    setError('');
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-tarea">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder={modoEdicion ? "Editar tarea..." : "Escribe tu tarea aquí..."}
      />
      <button type="submit" className="boton-principal">
        {modoEdicion ? 'Actualizar' : 'Agregar'}
      </button>
      {error && <p className="mensaje-error">{error}</p>}
    </form>
  );
};

export default FormularioTarea;
