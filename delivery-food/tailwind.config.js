module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      sm: { max: '500px' },
      md: { max: '767px' },
      lg: { max: '1023px' },
      xl: { max: '1279' },
    },
  },
  plugins: [],
};
