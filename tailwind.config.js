/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      // other extended properties...
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // other properties...
            html: {
              scrollBehavior: 'smooth',
            },
          },
        },
      }),
    },
  },
  plugins: [
        require('flowbite/plugin')
    ]
}
