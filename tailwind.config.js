/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        card: "#0e1112",
        primary: "#004f53",
        foreground: "#f5f2f380",
        muted: "#191c1c",
        neutral: "#1a1d1e",
        neutral95: "#2e3131",
        neutral80: "#c5c7c7",
        neutral70: "#eaeaea",
        neutral50: "#707979",
        neutral30: "#c5c7c7",
        tertiary: "#6f7979",
      },
      backgroundImage: {
        bg: 'url("./assets/bg.png")',
      },
    },
  },
  plugins: [],
};
