module.exports = {
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        '160': '40rem',
      },
    },
    fontFamily: {
      heading: [
        "Poppins",
        '"Helvetica Neue"',
        "Helvetica",
        "Arial",
        '"Hiragino Sans"',
        "ヒラギノ角ゴシック",
        '"Hiragino Kaku Gothic ProN"',
        '"ヒラギノ角ゴ Pro W3"',
        "Roboto",
        "メイリオ",
        "Meiryo",
        '"ＭＳ Ｐゴシック"',
        "sans-serif"
      ],
      body: [
        "Lato",
        '"Helvetica Neue"',
        "Helvetica",
        '"Hiragino Sans"',
        '"ヒラギノ角ゴシック Pro"',
        '"Hiragino Kaku Gothic Pro"',
        "メイリオ",
        "Meiryo", 
        "Osaka",
        '"ＭＳ Ｐゴシック"',
        '"MS PGothic"',
        "sans-serif",
      ]
    },
  },
  plugins: [],
}
