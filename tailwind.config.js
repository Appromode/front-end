module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prussian: '#05345C',
        bottle: '#12664F',
        brunswick: '#0C4536',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
