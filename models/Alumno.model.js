const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const alumnoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, 'Introduzca un nombre.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    curso: {
      type: String,
      required: [true, 'Introduzca un curso.']
    },
    socio: {
      type: Boolean,
      required: [true, 'Selecione una opcion.'],
    },
    numeroSocio: {
      type: Number
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Alumno = model("Alumno", alumnoSchema);

module.exports = Alumno;
