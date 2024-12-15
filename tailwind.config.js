/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF6A6A",
        secondary: "#7E57C2",
        light: "#F5F5F5",
        dark: "#212121",
        dark2: "#4A4A4A",
      },
      container: {
        center: true, /* Ensures the container is centered */
        padding: {
          DEFAULT: "1.5rem", /* Base padding for smaller screens */
          sm: "2rem",        /* Small screens (tablets) */
          md: "3rem",        /* Medium screens */
          lg: "4rem",        /* Large screens (desktops) */
          xl: "6rem",        /* Extra-large screens (wide desktops) */
          "2xl": "8rem",     /* Extra-wide screens */
        },
      },
      
    },
  },
  plugins: [],
}

