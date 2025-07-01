/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Lato', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#FFF5F7',  // Rosa muy claro
          100: '#FFE4E9', // Rosa palo claro
          200: '#FFC9D3', // Rosa palo medio
          300: '#FFA3B5', // Rosa palo
          400: '#FF87A0', // Rosa palo intenso
          500: '#FF6B8B', // Rosa palo principal
          600: '#FF4F76', // Rosa palo oscuro
          700: '#FF3361', // Rosa palo más oscuro
          800: '#FF174C', // Rosa palo muy oscuro
          900: '#FF0037', // Rosa palo intenso oscuro
        },
        pastel: {
          cream: '#F8F3E6',    // Crema suave
          pink: '#FFE4E9',     // Rosa palo
          blue: '#E6F3FF',     // Celeste suave
          beige: '#F5E6D3',    // Beige suave
          mint: '#E6F5F0',     // Menta suave
          lavender: '#F2E6FF',  // Lavanda suave
        },
        neutral: {
          50: '#F9F7F4',   // Fondo crema muy claro
          100: '#F2EDE7',  // Fondo crema claro
          200: '#E5DFD8',  // Beige claro
          300: '#D8D0C7',  // Beige medio
          400: '#BFB5AA',  // Beige oscuro
          500: '#A69B8E',  // Marrón claro
          600: '#8C8073',  // Marrón medio
          700: '#736659',  // Marrón oscuro
          800: '#594D40',  // Marrón muy oscuro
          900: '#403426',  // Marrón intenso
        },
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '1px 1px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.text-shadow-lg': {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      '.text-shadow-md': {
        'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.3)',
      },
    })
  }],
}