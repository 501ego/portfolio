const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/components/(switch|chip|navbar).js',
  ],
  theme: {
    screens: {
      xxs: '338px',
      xs: '461px',
      sm: '640px',
      md: '768px',
      mdc: '913px',
      lg: '1024px',
      lg2: '1035px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#18181b',
            foreground: '#eef2ff',
            textPrimary: '#e0e7ff',
            mainSubColor: '#fda4af',
            primaryTitleColor: '#a5b4fc',
            titleColor: '#fda4af',
            subtitleColor: '#fecdd3',
            shadow: '#171717',
            chip: '#262626',
            hover: '#fda4af',
            url: '#f1f5f9',
          },

          // Puedes definir layout, radius, borderWidth, etc., según sea necesario
        },
        light: {
          colors: {
            background: '#f9fafb',
            foreground: '#0a0a0a',
            textPrimary: '#18181b',
            mainSubColor: '#fb7185',
            primaryTitleColor: '#0284c7',
            titleColor: '#111827',
            subtitleColor: '#fda4af',
            shadow: '#262626',
            chip: 'none',
            hover: '#fda4af',
            url: '#f1f5f9',
          },
          // Puedes definir layout, radius, borderWidth, etc., según sea necesario
        },
      },
      backdropBlur: true,
    }),
  ],
}
