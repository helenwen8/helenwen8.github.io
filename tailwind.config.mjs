/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1024px'
        }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#3b82f6', // A custom brand blue
        'secondary': '#10b981', // A custom brand green
        'dark-blue': '#1a2b3c',
        'light-gray': '#f0f2f5',
        'gray': { // Using a scale for neutrals
          100: '#f3f4f6',
          500: '#6b7280',
          900: '#111827',
        },
        // ... and so on
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Custom scale for headlines or specific elements
        'headline-1': ['48px', { lineHeight: '56px', fontWeight: '700' }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // add required value here
          }
        }
      }
    },
	},
	plugins: [require('@tailwindcss/typography')],
}
