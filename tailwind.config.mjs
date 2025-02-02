/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textStrokeWidth: {
        sm: '1px',
        DEFAULT: '2px',
        lg: '3px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
