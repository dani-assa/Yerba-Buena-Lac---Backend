const z = require('zod');

const registerSchema = z.object({
  name: z.string({
    required_error: 'El nombre es requerido'
  }), 
  lastName: z.string({
    required_error: 'El apellido es requerido'
  }),
  email: z.string({
    required_error: 'El email es requerido'
  }).email({
    message: 'Email incorrecto'
  }),
  dni: z.string({
    required_error: 'El DNI es requerido'
  }),
  password: z.string({
    required_error: 'La contraseña es requerida'
  }).min(6, {
    message: 'La contraseña tiene que ser minimo 6 caracteres'
  })
});

const loginSchema = z.object({
  dni: z.string({
    required_error: 'El DNI es requerido'
  }),
  password: z.string({
    required_error: 'La contraseña es requerida'
  })
});

module.exports = {
  registerSchema,
  loginSchema
}