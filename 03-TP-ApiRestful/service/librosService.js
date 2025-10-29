import repo from '../model/librosModel.js';

const validar = (data) => {
    const anio = Number(data.anio);
    if (!data.titulo || !data.autor || Number.isNaN(anio)) {
        const err = new Error('Datos inválidos (titulo, autor, anio deben estar presentes y anio debe ser un número)');
        err.status = 400;
        throw err;
    }
    data.anio = anio;
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
        const anio = Number(cambios.anio);
        if (Number.isNaN(anio)) {
            const err = new Error('Datos inválidos (anio debe ser un número)');
            err.status = 400;
            throw err;
        }
        cambios.anio = anio;
    }
    return repo.update(id, cambios);
}

const remove = async (id) => {
    return repo.remove(id);
};

export default { getAll, getById, create, update, remove };
