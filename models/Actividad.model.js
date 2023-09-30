const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const actividadSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Introduzca un nombre.'],
      unique: true,
    },
    ciclo: {
      type: String,
      required: [true, 'Seleccione un ciclo.'],
      enum: ['infantil', 'primaria'],
    },
    nivel: {
      type: String,
      required: [true, 'Seleccione un nivel.'],
    },
    numeroDias: {
      type: String,
      required: [true, 'Seleccione un número de días']
    },
    diasSemana: {
      type: String,
      required: [true, 'Seleccione los dias de la semana.']
    },
    horario: {
      type: String,
      required: [true, 'Seleccione un horario.'],
      enum: ['16:00 - 17:00', '17:00 - 18:00']
    },
    precioSocios: {
      type: Number,
      required: [true, 'Introduzca un precio.']
    },
    precioNoSocios: {
      type: Number,
      required: [true, 'Introduzca un precio.']
    },
    empresa: {
      type: String,
      required: [true, 'Introduzca una empresa.'],
      enum: ['Repira Ocio', 'Otro Mundo', 'Bloco do Baliza']
    },
    numeroPlazas: {
      type: Number,
      required: [true, 'Introduzca un numero de plazas.']
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Actividad = model("Actividad", actividadSchema);

module.exports = Actividad;
