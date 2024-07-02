module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "text-shadow": [
          "1px 0 0 red",
          "0 1px 0 red",
          "-1px 0 0 red",
          "0 -1px 0 red",
        ],
      },
    },
  },
  plugins: [],
};
