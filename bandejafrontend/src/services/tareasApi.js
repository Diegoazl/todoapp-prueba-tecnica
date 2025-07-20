import axios from 'axios';

const API_URL = 'http://localhost:3001/tareas';

export const obtenerTareas = async () => {
  const respuesta = await axios.get(API_URL);
  return respuesta.data;
};

export const crearTarea = async (nuevaTarea) => {
  const respuesta = await axios.post(API_URL, nuevaTarea);
  return respuesta.data;
};

export const eliminarTarea = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const editarTarea = async (id, nuevaData) => {
  const respuesta = await axios.put(`${API_URL}/${id}`, nuevaData);
  return respuesta.data;
};
