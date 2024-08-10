/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors :{
        primary:'#f0f2f5',
        secondary:'#ff813f',
        tertiary:'#222222',
        slate:{
          10: '#f1f3f4'
        },
        green:{
          50:'#30AF5B',
          90:'#292C27',

        },
        gray:{
          10:'#EEEEEE',
          20:'#A2A2A2',
          30:'#7B7B7B',
          50:'5B5B5B',
          90:'#141414',
        }
      },
      screens:{
        xs: '400px',
        '3x1' : '1680px',
        '4x1' : '2200px',
      },
      maxWidth :{
        '10x1': '1512px',
      },
      borderRadius:{
        '5x1': '40px',
      }
    },
  },
  plugins: [],
};
