/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    // prefix: 'demo-tw-',
    theme: {
        fontFamily: {
            // sans: ["Graphik", "sans-serif"],
            sans: ["Segoe UI Historic", "Segoe UI", "Helvetica", "Arial", "sans-serif"]
        },
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/container-queries'),
    ],
};
