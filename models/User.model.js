const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    alumnos: [{
      type: Schema.Types.ObjectId,
      ref: 'Alumno',
    }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
