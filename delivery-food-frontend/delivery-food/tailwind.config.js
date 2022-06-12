module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "var(--light-blue)",
        softBlue: "var(--soft-blue)",
        darkBlue: "var(--dark-blue)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        white: "var(--white)",
      },
    },
    screens: {
      sm: { max: "500px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279" },
    },
  },
};
