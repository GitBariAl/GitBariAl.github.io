module.exports = {
  content: ["*.{html,js}",
    "./dist/*.{html,js}",
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8",

          secondary: "#22d3ee",

          accent: "#fde047",

          neutral: "#1f2937",

          "base-100": "#f5f5f4",

          info: "#67e8f9",

          success: "#4ade80",

          warning: "#fb923c",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
