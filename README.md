# Blythe Dolls - Landing Page

## 📖 Descripción del Proyecto

Landing page moderna y elegante para Blythe Dolls, una tienda especializada en muñecas únicas y personalizadas. El sitio web presenta una experiencia visual atractiva con galería de productos, sistema de suscripción a newsletter y diseño completamente responsivo.

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Vite** - Herramienta de construcción rápida para desarrollo frontend
- **Tailwind CSS** - Framework de CSS utilitario para diseño responsivo
- **Framer Motion** - Biblioteca para animaciones fluidas
- **EmailJS** - Servicio para envío de emails desde el frontend

### Backend
- **Node.js** - Entorno de ejecución de JavaScript
- **Express.js** - Framework web para Node.js
- **TypeScript** - Para tipado estático en el backend

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener calidad del código
- **PostCSS** - Procesador de CSS
- **Git** - Control de versiones

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd P-landing-page
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crear archivo `.env` en la raíz del proyecto
   - Configurar EmailJS (las credenciales están directamente en el frontend)

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

## 📋 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción
npm run lint         # Ejecuta ESLint para revisar el código
```

## 🌐 Deploy

### Vercel (Recomendado)

El proyecto está configurado para deploy automático en Vercel:

1. **Deploy automático desde GitHub**
   - Conectar repositorio con Vercel
   - Los deploys se ejecutan automáticamente en cada push a main

2. **Deploy manual**
   ```bash
   npm run build
   # Subir la carpeta dist/ a Vercel
   ```

3. **URL de producción**: `https://landing-blythe-tikno.vercel.app/`

### Configuración de Assets
- Todas las imágenes y videos deben estar en `public/images/`
- Los paths en el código deben usar rutas relativas: `/images/archivo.jpg`
- El favicon se encuentra en `public/logo.png`

## 📁 Estructura del Proyecto

```
P-landing-page/
├── public/
│   ├── images/          # Imágenes y videos del sitio
│   ├── logo.png         # Favicon del sitio
│   └── vite.svg
├── src/
│   ├── backend/         # Código del servidor (Express)
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   └── server.ts
│   └── frontend/        # Código del cliente (React)
│       ├── components/  # Componentes reutilizables
│       ├── assets/      # Assets del frontend
│       ├── App.tsx      # Componente principal
│       └── main.tsx     # Punto de entrada
├── .env                 # Variables de entorno
├── package.json         # Dependencias y scripts
├── tailwind.config.js   # Configuración de Tailwind
├── vite.config.ts       # Configuración de Vite
└── README.md
```

## ✨ Características Principales

### 🎨 Diseño y UX
- Diseño responsivo para todos los dispositivos
- Animaciones suaves con Framer Motion
- Paleta de colores elegante y moderna
- Tipografía cuidadosamente seleccionada (Playfair Display, Poppins, Lato)

### 🖼️ Galería de Productos
- Visualización de muñecas Blythe en diferentes categorías
- Imágenes optimizadas para web
- Navegación intuitiva

### 📧 Sistema de Newsletter
- Integración con EmailJS para envío de confirmaciones
- Formulario de suscripción en el footer
- Validación de emails en tiempo real

### 🎥 Contenido Multimedia
- Videos demostrativos de personalización
- Galería de imágenes de alta calidad
- Optimización para carga rápida

## 🔧 Configuración de EmailJS

El sistema de newsletter utiliza EmailJS con las siguientes configuraciones:

- **Service ID**: Configurado en el componente Footer
- **Template ID**: Template personalizado para confirmaciones
- **Public Key**: Clave pública de EmailJS

## 🐛 Solución de Problemas Comunes

### Imágenes no se muestran en producción
- Verificar que las imágenes están en `public/images/`
- Usar rutas relativas: `/images/archivo.jpg`
- No usar rutas absolutas como `/src/frontend/assets/`

### Errores de build
- Ejecutar `npm run lint` para revisar errores de código
- Verificar que todas las dependencias están instaladas
- Revisar la configuración de TypeScript

## 📱 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles (iOS y Android)

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📜 Licencia
Licencia de libre uso

## 📞 Contacto

Para consultas sobre el proyecto, contactar al equipo de desarrollo.
https://github.com/TIKNO-col
---

