module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarys: "var(--primary)",
        softBlue: "var(--soft-blue)",
        white: "var(--white)",
        black: "var(--black)",
      },
    },
    screens: {
      sm: { max: "500px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279" },
    },
  },
  plugins: [],
};
