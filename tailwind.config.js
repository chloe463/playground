module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        '160': '40rem',
      },
      boxShadow: {
        elevation4: "0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)",
      }
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
