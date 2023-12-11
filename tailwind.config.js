// @ts-check
const {fontFamily} = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
    content: [
        './node_modules/pliny/**/*.js',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,tsx}',
        './components/**/*.{js,ts,tsx}',
        './layouts/**/*.{js,ts,tsx}',
        './data/**/*.mdx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'front': "url('/img/wasp_robot-02.svg')",
                'side': "url('/img/wasp_robot-01.svg')",
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {transform: 'rotate(-3deg)'},
                    '50%': {transform: 'rotate(3deg)'},
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
            screens: {
                tablet: '640px',
            },
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            fontFamily: {
                sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
                body: ['Poppins', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                body: "#f5f5f5",
                txt: "#4B4145",
                primary: {
                    500: '#F7981E',
                    600: '#F7981E',
                    DEFAULT: '#F7981E',
                },
                orange: {
                    100: '#FEF0E2'
                },
                label: '#F8F9FE',
                secondary: '#48233C',
                info: '#005FFE',
                cyan: '#17a2b8',
                purple: '#A04BE8',
                teal: '#00ccb1',
                gray: {
                    100: '#f8f9fa',
                    200: "#e9ecef",
                    300: "#dee2e6",
                    400: "#ced4da",
                    500: "#adb5bd",
                    600: "#6c757d",
                    700: "#4B4145",
                    800: "#343a40",
                    900: "#27111B",
                    DEFAULT:"#343a40",
                },
                accessibility: {
                    600: "#D9F1E6",
                    900: "#00ccb1"
                },
                code: {
                    600: "#c5dbff",
                    900: "#0060F2"
                },
                seo: {
                    600: "#E2F4FB",
                    900: "#3DC9FB"
                },
                privacy: {
                    600: "#fa3cbe4d",
                    900: "#FA3CBE"
                },
                content: {
                    600: "#f8efdf",
                    900: "#F8AE21"
                },
                performance: {
                    600: "#E9DDF6",
                    900: "#A150F6"
                },
            },
            fontSize: {
                "4xl": [
                    "3.576rem",
                    "4.6875rem"
                ],
                "3xl": [
                    "2.861rem",
                    "3.75rem"
                ],
                "2xl": [
                    "2.289rem",
                    "2.8125rem"
                ],
                "xl": [
                    "1.831rem",
                    "2.8125rem"
                ],
                "lg": [
                    "1.465rem",
                    "1.875rem"
                ],
                "md": [
                    "1.172rem",
                    "1.875rem"
                ],
                "base": [
                    "0.938rem",
                    "1.875rem"
                ],
                "sm": [
                    "0.75rem",
                    "1.875rem"
                ],
                "xs": [
                    "0.6rem",
                    "0.9375rem"
                ]
            },
            spacing: {
                "1": "0.234375rem",
                "2": "0.46875rem",
                "3": "0.9375rem",
                "4": "1.875rem",
                "6": "2.8125rem",
                "8": "3.75rem",
                "10": "4.6875rem",
                "12": "5.625rem",
                "14": "7.5rem",
                "16": "11.25rem",
                "18": "15rem"
            },
            typography: ({theme}) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.600')}`,
                            },
                            code: {color: theme('colors.primary.400')},
                        },
                        'h1,h2': {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                        },
                        h3: {
                            fontWeight: '600',
                        },
                        code: {
                            color: theme('colors.indigo.500'),
                        },
                    },
                },
                invert: {
                    css: {
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.400')}`,
                            },
                            code: {color: theme('colors.primary.400')},
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
