import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    50: '#fffbf2',
                    100: '#fbf0d8',
                    200: '#f4ddb2',
                    300: '#eac57c',
                    400: '#dca94f',
                    500: '#c28d31',
                    600: '#a97627', // Main brand gold
                    700: '#8a601f',
                    800: '#6b4a18',
                    900: '#4b3410',
                },
                secondary: {
                    50: '#f3f6ff',
                    100: '#e4ebfb',
                    200: '#c7d4f4',
                    300: '#9fb4e8',
                    400: '#6f8fda',
                    500: '#4668c2',
                    600: '#2f4f9a',
                    700: '#233d78',
                    800: '#142349',
                    900: '#070f24', // Deep navy base to match logo background
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.6s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
