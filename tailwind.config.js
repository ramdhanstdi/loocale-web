/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				primary: {
					200: '#95B7D4',
					800: '#0f3c56',
					900: '#00283e',
				},
				secondary: {
					500: '#F1614B',
					800: '#C2493C'
				},
				grayscale: {
					100: '#D2D9DE'
				}
			}
		}
    
  },
  plugins: [],
}
