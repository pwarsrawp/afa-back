const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const listaSchema = new Schema(
  {
    actividad: {
      type: Schema.Types.ObjectId,
      ref: 'Actividad',
      required: true
    },
    alumnos: [{
      type: Schema.Types.ObjectId,
      ref: 'Alumno',
    }],
  }
);

const Lista = model("Lista", listaSchema);

module.exports = Lista;
