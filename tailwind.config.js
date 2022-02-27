module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
          'black-t-50':'rgba(0,0,0,0.5)',
      },
      fontFamily: {
        Roboto: ["Roboto"],
        'Nunito-Sans':['Nunito Sans'],
        'Montserrat':['Montserrat'],
      },
      spacing: {
        '34': '136px',
        '112': '28rem',
        '120': '30rem',
        '300px': '324px',
        '100px': '100px',
        '0.1': "1px",



      },
      colors: {
        'blueMain': '#33A0FF',
        'OrangeMain': '#FFF3E4',
        'btnOrange': '#F48c06',
        'btnYagaan': '#ff6f4f',
        'btnSmColor': '#f4c467',
        'bgServiceColor': '#f8fbfb',
        'greengradient': 'rgba(180deg, #36BC49 0%, #03A21A 100%)',
      },
      borderRadius: {
        coverRadius: "5rem",
      },
      minHeight: {
        'custom': '400px',
      },
    },
  },
  plugins: [],
};
