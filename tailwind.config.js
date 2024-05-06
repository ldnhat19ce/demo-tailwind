/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    // prefix: 'demo-tw-',
    theme: {
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
            'blue-500': 'rgb(59 130 246)',
            'red-500': 'rgb(239 68 68)',
            'gray-600': 'rgb(75 85 99)'
        },
        width: {
            '1-5em': '1.5em',
            '16': '4rem',
            'screen': '100vh'
        },
        height: {
            '1-5em': '1.5em',
            '16': '4rem',
            'screen': '100vh'
        },
        backgroundSize: {
            '100': '100%'
        },
        backgroundColor: {
            '100': '#FCFCFC',
            'transparent': 'transparent',
            'wash-me': '#F9FAFD',
            'lead': '#212121'
        },
        borderColor: {
            'transparent': 'transparent'
        },
        flex: {

        },
        extend: {

        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/container-queries'),
    ],
};
