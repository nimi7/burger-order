module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    // ...
    justifySelf: false,
   flexShrink: false,
   justifyContent: false,
  },
  theme: {
    flexShrink: {
      '0': 0,
      DEFAULT: 1,
      DEFAULT: 2,
      '1': 1,
    },
    'sm': '640px',
    // => @media (min-width: 640px) { ... }
    'md': '768px',
    // => @media (min-width: 768px) { ... }
    'lg': '850px',
    // => @media (min-width: 1024px) { ... }
    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }
    '2xl': '1536px',
    extend: {
      lineClamp: {
        10: "10",
        12: "12",
      },
      flexShrink: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {
      lineClamp: ["hover"],
      justifySelf: ['hover', 'focus'],
      justifyContent: ['hover', 'focus'],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
