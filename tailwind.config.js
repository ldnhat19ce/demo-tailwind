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
            'black-panther': '#424242'
        },
        width: {
            '1-5em': '1.5em'
        },
        height: {
            '1-5em': '1.5em'
        },
        backgroundSize: {
            '100': '100%'
        },
        backgroundColor: {
            '100': '#FCFCFC',
            'transparent': 'transparent',
            'wash-me': '#F9FAFD'
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
