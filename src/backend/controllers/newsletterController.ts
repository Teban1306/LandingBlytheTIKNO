import nodemailer from 'nodemailer';
import type { Request, Response } from 'express';

type RequestType = Request;
type ResponseType = Response;

// Configuración del transporter de nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const subscribeToNewsletter = async (req: RequestType, res: ResponseType) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'El email es requerido' });
    }

    // Enviar email de confirmación
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '¡Bienvenido al Newsletter de Blythe Dolls!',
      html: `
        <h1>¡Gracias por suscribirte!</h1>
        <p>Te mantendremos informado sobre las últimas novedades y lanzamientos de Blythe Dolls.</p>
        <p>TIKNO COL.</p>
      `
    });

    // También podríamos guardar el email en una base de datos aquí

    res.status(200).json({ 
      message: 'Suscripción exitosa',
      email 
    });
  } catch (error) {
    console.error('Error en la suscripción:', error);
    res.status(500).json({ 
      error: 'Error al procesar la suscripción',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export { subscribeToNewsletter };