import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#12345B",
        ocean: "#1769AA",
        sky: "#E8F4FC",
        ink: "#182B3D",
        mist: "#F5F8FB",
      },
      boxShadow: {
        card: "0 18px 50px rgba(18, 52, 91, 0.09)",
      },
    },
  },
  plugins: [],
};

export default config;
