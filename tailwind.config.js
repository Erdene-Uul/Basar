module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      spacing: {
        '34': '136px',
        '112': '28rem',
        '300px': '324px',
        '100px': '100px',



      },
      colors: {
        blueMain: "#33A0FF",
        OrangeMain: "#FFF3E4",
        btnOrange: "#F48c06",
        btnYagaan: "#ff6f4f",
        btnSmColor: "#f4c467",
        bgServiceColor: "#f8fbfb",
        greengradient: "rgba(180deg, #36BC49 0%, #03A21A 100%);",
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
}