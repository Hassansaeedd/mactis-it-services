/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E40AF', // Enterprise Royal Blue
          light: '#2563EB',   // Corporate Cobalt
          dark: '#1D4ED8',    // Deep Sapphire
          muted: '#3B82F6',
        },
        dark: {
          DEFAULT: '#0F172A', // Slate 900 (High-end corporate midnight)
          lighter: '#1E293B', // Slate 800 (Clean surface)
          card: '#1E293B',    // Slate 800 (Clean solid card layer)
          border: '#334155',  // Slate 700 (Crisp 1px border)
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E293B',
        },
        accent: '#2563EB',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}