const router = require("express").Router();
const Alumno = require("../models/Alumno.model")

/* GET ALL ALUMNOS */
router.get('/', async (req, res) => {
  const allAlumnos = await Alumno.find()
  res.json(allAlumnos)
})

/* GET ONE ALUMNO */
router.get('/:alumnoId', async (req, res) => {
  const oneAlumno = await Alumno.findById(req.params.alumnoId)
  res.json(oneAlumno)
})

/* CREATE ALUMNO */
router.post('/', async (req, res) => {
  try {

    const { nombre, curso, socio, numeroSocio } = req.body;

    const newAlumno = await Alumno.create({ nombre, curso, socio, numeroSocio });

    res.status(201).json(newAlumno);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creando Alumno.', message: error.message });
  }
});



/* UPDATE ALUMNO */
router.put('/:alumnoId', async (req, res) => {
  const updatedAlumno = await Alumno.findByIdAndUpdate(req.params.alumnoId, req.body, {
    new: true,
  })
  res.json(updatedAlumno)
})

/* DELETE ALUMNO */
router.delete('/:alumnoId', async (req, res) => {
  await Alumno.findByIdAndDelete(req.params.alumnoId)
  res.status(202).json({ message: 'Alumno borrado correctamente.' })
})

module.exports = router