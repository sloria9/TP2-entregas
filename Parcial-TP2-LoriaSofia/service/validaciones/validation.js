import Joi from "joi"

export const validar = numero => {
    const numeroSchema = Joi.object({
        numero: Joi.number().min(0).max(1000000).required()
    })

    const { error } = numeroSchema.validate(numero)
    if(error) {
        return { result: false, error }
    }
    return { result: true }
}
