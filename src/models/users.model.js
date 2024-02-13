const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, 'El campo es requerido'],
      trim: true

    },
    email: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
      trim: true,
      unique: true
    },
    dni: {
      type: String,
      required: [true, 'El campo nombre es requerido'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'El campo nombre es requerido']
    },
    role: {
      type: String,
      enum: ['admin', 'client'],
      default: 'client'
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
    {timestamps: true}
    );


  module.exports = model('user', userSchema);