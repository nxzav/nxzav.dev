/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
				jetbrains: ['JetBrains Mono', 'monospace', 'sans-serif']
      },
    },
  },
  plugins: [],
}
