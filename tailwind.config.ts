import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#0f0206',
        'background': '#fef3f6',
        'primary': '#e82c71',
        'secondary': '#a4f17f',
        'accent': '#56ec81',
      },
    },
  },
  plugins: [],
};
export default config;
