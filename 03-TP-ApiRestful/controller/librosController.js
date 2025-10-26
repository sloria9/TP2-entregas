import service from '../service/librosService.js';

const getAll = async (req, res, next) => {
    try {
        res.json(await service.getAll()); // Ahora esta llamada es consistente
    } catch (e) {
        next(e);
    }
}

const getById = async (req, res, next) => {
    try {
        const libro = await service.getById(req.params.id); // Ahora esta llamada es consistente
        if (!libro) return res.status(404).json({ error: 'libro no encontrado' });
        res.json(libro);
    } catch (e) {
        next(e);
    }
}


const create = async (req, res, next) => { try {

  const nuevo = await service.crear(req.body);

  res.status(201).json(nuevo);

} catch (e) { next(e); } }



const update = async (req, res, next) => { try {

  const act = await service.actualizar(req.params.id, req.body);

  if (!act) return res.status(404).json({ error: 'libro no encontrado' });

  res.json(act);

} catch (e) { next(e); } }



const remove = async (req, res, next) => { try {

  const del = await service.borrar(req.params.id);

  if (!del) return res.status(404).json({ error: 'libro no encontrado' });

  res.json(del);

} catch (e) { next(e); } }



export default { getAll, getById, create, update, remove };