/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secodary: "var(--secodary)",
        // main: "var(--main)",
        // background: "var(--background)",
        // header: "var(--header)",
        // accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};
