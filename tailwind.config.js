/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { 
    extend: {fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        basicgothic: ['ff-basic-gothic-pro', 'sans-serif'],
      
    }, 
   
      fontWeight: {
        light: 100,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
      },
    },
  },
  plugins: [],
}

