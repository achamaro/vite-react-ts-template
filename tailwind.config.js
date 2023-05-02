import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(
      ({
        addUtilities,
        matchUtilities,
        addComponents,
        matchComponents,
        theme,
      }) => {
        //
      }
    ),
  ],
};
