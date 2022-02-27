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
<<<<<<< HEAD
        '34': '136px',
        '112': '28rem',
        '120': '30rem',
        '300px': '324px',
        '100px': '100px',



      },
      colors: {
        'blueMain': '#33A0FF',
        'OrangeMain': '#FFF3E4',
        'btnOrange': '#F48c06',
        'btnYagaan': '#ff6f4f',
        'btnSmColor': '#f4c467',
        'bgServiceColor': '#f8fbfb',
        'greengradient': 'rgba(180deg, #36BC49 0%, #03A21A 100%)',
=======
        0.1: "1px",
      },
      colors: {
        blueMain: "#33A0FF",
        OrangeMain: "#FFF3E4",
        btnOrange: "#F48c06",
        btnYagaan: "#ff6f4f",
        btnSmColor: "#f4c467",
        bgServiceColor: "#f8fbfb",
        greengradient: "rgba(180deg, #36BC49 0%, #03A21A 100%);",
        
>>>>>>> 9a3c476e551507dec46b1f8d8b13019e7d6a7a5c
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
