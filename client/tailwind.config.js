/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
    outfit: ['Outfit', 'sans-serif'],
    pacifico: ['Pacifico', 'cursive'],
    tagesschrift: ['Tagesschrift', 'sans-serif'],
    raleway: ['Raleway', 'sans-serif'],
  },
      keyframes: {
        bgShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        bgShift: 'bgShift 10s ease infinite',
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))",
      },
      spacing: {
        "section-height": "500px",
      },
      fontSize: {
        default: ["15px", "21px"],
        "course-deatails-heading-small": ["26px", "36px"],
        "course-deatails-heading-large": ["36px", "44px"],
        "home-heading-small": ["28px", "34px"],
        "home-heading-large": ["48px", "56px"],
      },
      maxWidth: {
        "course-card": "424px",
      },
      boxShadow: {
        "custom-card": "0px 4px 15px 2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};