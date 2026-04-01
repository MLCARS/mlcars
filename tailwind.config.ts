import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#06060a',
        glow: '#d946ef',
        cyanGlow: '#22d3ee'
      },
      boxShadow: {
        neon: '0 0 30px rgba(217,70,239,0.25)',
        cyan: '0 0 30px rgba(34,211,238,0.2)'
      }
    }
  },
  plugins: []
} satisfies Config
