/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'teacher-background': "url('/assets/sample_teacher_background.jpg')"
      }
    },
  },
  plugins: [],
}