// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'skills-gradient': `
          linear-gradient(38.73deg, rgba(6, 93, 105, 0.2) 0%, rgba(6, 93, 105, 0) 50%),
          linear-gradient(141.27deg, rgba(0, 123, 255, 0) 50%, rgba(0, 123, 255, 0.2) 100%)
        `,
      },
    },
  },
  plugins: [],
};

