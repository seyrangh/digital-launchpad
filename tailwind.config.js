// tailwind.config.js

const svgToDataUri = require("mini-svg-data-uri");

/** Define the function before using it */
function addVariablesForColors({ addBase, theme }) {
  const colorVars = Object.entries(theme("colors")).reduce(
    (vars, [colorName, colorValue]) => {
      if (typeof colorValue === "string") {
        vars[`--${colorName}`] = colorValue;
      } else if (typeof colorValue === "object") {
        Object.entries(colorValue).forEach(([shade, value]) => {
          vars[`--${colorName}-${shade}`] = value;
        });
      }
      return vars;
    },
    {}
  );

  addBase({
    ":root": colorVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        squareRegular: ["var(--font-square-regular)", "sans-serif"],
        squareBold: ["var(--font-square-bold)", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slide: "slide 10s linear infinite",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      const colorValues = Object.entries(theme("backgroundColor")).reduce(
        (acc, [key, value]) => {
          if (typeof value === "string") {
            acc[key] = value;
          } else if (typeof value === "object") {
            Object.entries(value).forEach(([shade, shadeValue]) => {
              acc[`${key}-${shade}`] = shadeValue;
            });
          }
          return acc;
        },
        {}
      );

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="${value}"><path d="M0 0 H32 V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" stroke="${value}"><path d="M0 0 H8 V8"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><circle cx="8" cy="8" r="2" fill="${value}" /></svg>`
            )}")`,
          }),
        },
        { values: colorValues, type: ["color"] }
      );
    },
  ],
};
