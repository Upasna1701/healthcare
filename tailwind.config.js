/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
        screens:{
          '2xl':'1700px',
          'xl':'1440px',
          'lg':'1280px',
        },
        center: true,
        padding: {
          DEFAULT: '24px',  
          xl: '127px',      
          lg: '60px',
        },
    },
    // spacing: {
    //   'containerWidth':'calc(1660px + 28px)',
    // },
    extend: {
      colors:{
        'pc':'#0F4D92',
        'sc':'#1E1E1E',
        'pcolor':'#000000',
        'white':'#ffffff',
        'yclr':'FFEEB3',
        'greyclr':'#757575',
        'footerlink':'#191918',
        'borderclr':'#1C345442',
        'iconclr': '#141B3F',
        'iconclr2': '#323232',
        'iconclr3': '#1C324F61',
        'cardpara':'#192739F0',
        'faqicon':'#222222',
        'blueclr':'#006CFAC2',
        'blueclr2':'#005FDB',
        'popupclr':'#616d7c',
        'extraclr1':'#1B2B41B0',
        'extraclr2':'#242A35',
        'extraclr3':'#192434',
        'extraclr4':'#158444',
        'extraclr5':'#985211',
        'testimonialclr': '#394455',
        'lightblack':'#333333',
        'starclr':'#E0AB00',
        'hoverclr':'#FE6A36',


      },
      fontSize: {
        'h1font':'40px',
        'h2font':'28px',
        'h3font':'22px',
        'h4font':'18px',
        'h5font':'26px',
        'h6font':'13px',
        'regsize':'32px',
        'pfont':'16px',
        'anchortext':'14px',
        'smalltext':'12px',
      },
      inset: {
        '0': '0',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'greyshadow':'0px 18px 64px -8px rgba(28, 55, 90, 0.16), 0px 4px 24px -3px rgba(26, 56, 96, 0.10)',
        'cardshadow': '0px 284px 80px 0px rgba(151, 180, 226, 0.01), 0px 182px 73px 0px rgba(151, 180, 226, 0.04), 0px 102px 61px 0px rgb(151 180 226 / 0%), 0px 46px 46px 0px rgb(151 180 226 / 0%), 0px 11px 25px 0px rgb(151 180 226 / 36%)',
        'blueshadow':'0px 284px 80px 0px rgba(151, 180, 226, 0.01), 0px 182px 73px 0px rgba(151, 180, 226, 0.04), 0px 102px 61px 0px rgba(151, 180, 226, 0.15), 0px 46px 46px 0px rgba(151, 180, 226, 0.26), 0px 11px 25px 0px rgba(151, 180, 226, 0.29)',
      },
      maxHeight: {
        '0': '0',
      },
    },
  },
  plugins: [],
};
