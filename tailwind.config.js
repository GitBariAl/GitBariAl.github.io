module.exports = {
  content: ["*.{html,js}"],
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
        darkTheme: {
          primary: "#1d4ed8", // Blu, può rimanere uguale o leggermente più chiaro per il tema scuro
          secondary: "#22d3ee", // Ciano, può rimanere uguale o leggermente più chiaro per il tema scuro
          accent: "#fde047", // Giallo, può rimanere uguale poiché fornisce un buon contrasto anche su sfondi scuri
          neutral: "#2a303c", // Grigio più chiaro per il testo e gli elementi su sfondo scuro
          "base-100": "#1f2937", // Colore di sfondo principale più scuro
          info: "#3dd0f3", // Blu più chiaro per il tema scuro
          success: "#22c55e", // Verde, può rimanere uguale o diventare leggermente più chiaro
          warning: "#f97316", // Arancione, può rimanere uguale poiché fornisce un buon contrasto
          error: "#ef4444", // Rosso, può rimanere uguale o diventare leggermente più chiaro
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
