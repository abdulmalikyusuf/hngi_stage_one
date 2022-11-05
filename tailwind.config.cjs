/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-900': '#101828',
        'custom-gray-500': '#667085',
        'custom-gray-400': '#98A2B3',
        'custom-gray-300': '#D0D5DD',
        'custom-gray-200': '#EAECF0',
        'custom-gray-100': '#F2F4F7',
        'custom-gray-50': '#F9FAFB',
        'custom-gray-25': '#FCFCFD',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addUtilities }) {
			addUtilities({
        ".profile__photo__background": {
          background: '#F9FAFB'
        },
				".share__btn": {
          height: '40px',
          width: '40px',
          'border-radius': '999%',
          border: 'dashed 1.67px var(--gray-400)',
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          /* position: 'absolute', */
          right: '200px',
          top: '-20px',
          "&:hover": {
            background: 'var(--gray-50)'
          },
          "&:focus": {
            background: '#FFFFFF',
            border: '1px dashed var(--gray-300)',
            'box-shadow': '0px 0px 0px 4px var(--gray-100)',
          },
          "&:disabled": {
            background: 'var(--gray-50)',
            border: '1px dashed var(--gray-200)',
          }
        },
        ".form__field":{
          padding: '10px 14px',
          width: '100%',
          // height: '44px',
          background: '#FFFFFF',
          border: '1px solid #D0D5DD',
          'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05)',
          'border-radius': '8px',
          
          "&:focus": {
            border: '1px solid #84CAFF',
            'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05)'
          },
          "&:invalid": {
            border: '1px solid #F89687',
            'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05)'
          }
        },
        ".message__field": {
          "&:focus": {
            border: '1px solid #84CAFF',
            'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF',
            
            "&:invalid": {
              border: '1px solid #F89687',
              'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC'
            },
          },
        },
        ".submit__btn": {
          'margin-top': '34px',
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'align-items': 'center',
          padding: '12px 20px',
          // gap: '8px',
          width: '100%',
          // height: '48px',
          background: '#1570EF',
          border: '1px solid #1570EF',
          'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05)',
          'border-radius': '8px',
          color: 'white',
          'font-weight': '700',

          "&:hover": {
            background: '#175CD3',
            border: '1px solid #175CD3'
          },
          "&:disabled": {
            background: '#B2DDFF',
            border: '1px solid #B2DDFF'
          },
          "&:focus": {
            'box-shadow': '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF',
          },
        },
        ".checkbox__field": {
          background: '#FFFFFF',
          border: '1px solid #D0D5DD',
          'border-radius': '6px',

          "&:focus": {
            border: '1px solid #84CAFF',
            'box-shadow': '0px 0px 0px 4px #D1E9FF',
          },
          "&:disabled": {
            background: '#F2F4F7',
            border: '1px solid #D0D5DD'
          },
        },
      })
    })
  ],
}
