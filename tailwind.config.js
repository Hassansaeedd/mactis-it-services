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
          DEFAULT: '#0EA5E9', // Sky 500 (Matches Mactis Light Blue Logo)
          light: '#38BDF8',   // Sky 400
          dark: '#0284C7',    // Sky 600
          muted: '#7DD3FC',   // Sky 300
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