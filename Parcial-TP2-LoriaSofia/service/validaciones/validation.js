export function validarNumero(obj) {
  const n = Number(obj.numero ?? obj)
  if (!Number.isFinite(n)) {
    return { result: false, error: { details: [{ message: 'El campo "numero" debe ser numérico' }] } }
  }
  return { result: true }
}
