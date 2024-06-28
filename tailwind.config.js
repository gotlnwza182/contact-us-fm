/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey-900": "#2A4144",
        "grey-500": "#86A2A5",
        white: "#FFFFFF",
        "green-600": "#0C7D69",
        "green-200": "#E0F1E8",
        "Red-error": "#D73C3C",
      },
      fontSize: {
        "4xl": ["2rem", { lineHeight: "100%", letterSpacing: "-1px" }],
        base: ["1.125rem", { lineHeight: "150%" }],
        sm: ["1rem", { lineHeight: "150%" }],
      },
      backgroundImage: {
        "checked-icon": "url('./assets/images/icon-checkbox-check.svg')",
        "selected-icon": "url('./assets/images/icon-radio-selected.svg')",
      },
    },
  },
  plugins: [],
};
