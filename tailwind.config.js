export default {
  relative: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        sans: [
          "museo-sans",
          "museo-sans-rounded",
          "museo-sans-condensed",
          "museo-sans-display",
        ],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        stealth: {
          primary: "#141640",
          secondary: "#10285A",
          accent: "#05F2DB",
          neutral: "#d1d5db",
          "base-100": "#050840",
          info: "#006eff",
          success: "#00bf87",
          warning: "#ffa200",
          error: "#b91c1c",
        },
      },
      ,
    ],
    base: true,
    themeRoot: ":root",
    utils: true,
    styled: true,
    prefix: "",
  },
};
