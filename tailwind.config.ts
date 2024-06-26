import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainColor: "#5A639C",
        secondColor: "#7776B3",
        thirdColor: "#9B86BD",
        fourthColor: "#E2BBE9",

        darkMainColor: "#070F2B",
        darkSecondColor: "#1B1A55",
        darkThirdColor: "#535C91",
        darkFourthColor: "#9290C3",
      },
    },
  },
  plugins: [],
};
export default config;
