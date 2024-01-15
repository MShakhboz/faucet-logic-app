/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                green: "rgba(0, 126, 76, 1)",
                "green-light": "rgba(0, 227, 136, 1)",
            },
        },
    },
    plugins: [],
};
