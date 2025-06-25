import express from 'express';

const router = express.Router();

// Aquí puedes agregar tus rutas
router.get('/ejemplo', (req, res) => {
  res.json({ message: 'Ruta de ejemplo' });
});

export default router;