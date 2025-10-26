import repo from '../model/libroModel.js';

const validar = (data) => {
  if (!data.titulo || !data.autor || typeof data.anio !== 'number') {
    const err = new Error('Datos inválidos (titulo, autor, anio)');
    err.status = 400;
    throw err;
  }
};

const listar = () => repo.getAll();

const buscarPorId = (id) => repo.getById(id);

const crear = (data) => {
  validar(data);
  return repo.create(data);
};

const actualizar = (id, cambios) => {
  if ('anio' in cambios) cambios.anio = Number(cambios.anio);
  return repo.update(id, cambios);
};

const borrar = (id) => repo.remove(id);

export default { listar, buscarPorId, crear, actualizar, borrar };
