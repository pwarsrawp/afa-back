const router = require("express").Router();
const Actividad = require("../models/Actividad.model")

/* GET ALL ACTIVIDADES */
router.get('/', async (req, res) => {
  const allActividades = await Actividad.find()
  res.json(allActividades)
})

/* GET ONE ACTIVIDAD */
router.get('/:actividadId', async (req, res) => {
  const oneActividad = await Actividad.findById(req.params.actividadId)
  res.json(oneActividad)
})

/* CREATE ACTIVIDAD */
router.post('/', async (req, res) => {
  try {

    const { actividad, ciclo, nivel, numeroDias, diasSemana, horario, precioSocios, precioNoSocios, empresa, plazas } = req.body;

    const newLista = await Lista.create({ actividad, ciclo, nivel, numeroDias, diasSemana, horario, precioSocios, precioNoSocios, empresa, plazas });

    res.status(201).json(newLista);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creating list', message: error.message });
  }
});



/* UPDATE ACTIVIDAD */
router.put('/:productId', async (req, res) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
    new: true,
  })
  res.json(updatedProduct)
})

/* DELETE ACTIVIDAD */
router.delete('/:productId', async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId)
  res.status(202).json({ message: 'Product successfully deleted' })
})

module.exports = router