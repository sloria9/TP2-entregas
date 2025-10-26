import repo from '../model/librosModel.js';

const validar = (data) => {
    if (!data.titulo || !data.autor || typeof data.anio !== 'number') {
        const err = new Error('Datos inválidos (titulo, autor, anio deben estar presentes y anio debe ser un número)');
        err.status = 400;
        throw err;
    }
};

const getAll = async () => {
    return repo.getAll();
};

const getById = async (id) => {
    return repo.getById(id);
};

const create = async (data) => {
    validar(data);
    return repo.create(data);
};

const update = async (id, cambios) => {
    if ('anio' in cambios) {
        cambios.anio = Number(cambios.anio);
    }
    return repo.update(id, cambios);
};

const remove = async (id) => {
    return repo.remove(id);
};

export default { getAll, getById, create, update, remove };