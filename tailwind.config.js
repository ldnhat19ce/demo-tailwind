/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    // prefix: 'demo-tw-',
    theme: {
        extend: {
            fontFamily: {
                // sans: ["Graphik", "sans-serif"],
                sans: ["Segoe UI Historic", "Segoe UI", "Helvetica", "Arial", "sans-serif"]
            },
            colors: {
                'lemon-whisper': '#FFB30E'
            },
            textColor: {
                'grey-900': '#212121',
                'lemon-whisper': '#FFB30E',
                'black-panther': '#424242',
                'white-smoke': '#F5F5F5',
                'wash-me': '#F9FAFD',
                'kettleman': '#616161'
            },
            width: {
                '1-5em': '1.5em',
                '16': '4rem',
                'screen': '100vh',
                '100': '100%',
                '70': '70%'
            },
            height: {
                '1-5em': '1.5em',
                '16': '4rem',
                'screen': '100vh',
                '100': '100%',
                '70': '70%'
            },
            backgroundSize: {
                '100': '100%'
            },
            backgroundColor: {
                '100': '#FCFCFC',
                'wash-me': '#F9FAFD',
                'lead': '#212121',
                'primary': '#FFB30E'
            },
            borderColor: {
                'transparent': 'transparent'
            },
            order: {
                '0': '0'
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/container-queries'),
    ],
};
