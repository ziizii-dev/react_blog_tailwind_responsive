/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    ],
    theme: {
        extend: {
            borderRadius: {
                "4xl": "2rem",
                "3xl": "1rem",
                "2xl": "0.5rem",
            },
        },
        colors: {
            primary: "#088395",
            secondary: "#0A4D68",
            third: "#05BFDB",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        screens: {
           xs:"300px",
           sm: "480px", 
           md: "768px",
           lg: "1024px",
           xl:"1280px",

        },
    },
    plugins: [],
});
