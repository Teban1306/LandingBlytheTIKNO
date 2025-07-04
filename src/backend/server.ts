import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsletterRoutes from './routes/newsletterRoutes';

// Configuración de variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/newsletter', newsletterRoutes);

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API Backend funcionando correctamente' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});