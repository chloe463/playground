module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        "0.5": "2px",
        1: "4px",
        "1.5": "6px",
        2: "8px",
        3: "12px",
        "3.5": "14px",
        4: "16px",
        "4.5": "18px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        20: "80px",
        21: "84px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        27: "108px",
        28: "114px",
        30: "120px",
        31: "124px",
        32: "128px",
        40: "160px",
        50: "200px",
        60: "240px",
      },
      margin: {
        "0.5": "2px",
        1: "4px",
        "1.5": "6px",
        2: "8px",
        3: "12px",
        "3.5": "14px",
        4: "16px",
        "4.5": "18px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        20: "80px",
        21: "84px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        27: "108px",
        28: "114px",
        30: "120px",
        31: "124px",
        32: "128px",
        40: "160px",
        50: "200px",
      },
      padding: {
        "0.5": "2px",
        1: "4px",
        "1.5": "6px",
        2: "8px",
        3: "12px",
        "3.5": "14px",
        4: "16px",
        "4.5": "18px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        20: "80px",
        21: "84px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        27: "108px",
        28: "114px",
        30: "120px",
        31: "124px",
        32: "128px",
        40: "160px",
        50: "200px",
      },
      boxShadow: {
        elevation4: "0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%), 0 1px 10px 0 rgb(0 0 0 / 12%)",
      },
      transitionTimingFunction: {
        'in': 'cubic-bezier(0.3, 0.3, 0.3, 1)',
      },
      colors: {
        "black-alpha50": "rgba(0, 0, 0, 0.03)",
        "black-alpha100": "rgba(0, 0, 0, 0.06)",
        "black-alpha200": "rgba(0, 0, 0, 0.12)",
        "black-alpha300": "rgba(0, 0, 0, 0.24)",
        "black-alpha400": "rgba(0, 0, 0, 0.4)",
        "black-alpha500": "rgba(0, 0, 0, 0.56)",
        "black-alpha700": "rgba(0, 0, 0, 0.74)",
        "black-alpha800": "rgba(0, 0, 0, 0.84)",
        "white-alpha50": "rgba(255, 255, 255, 0.06)",
        "white-alpha100": "rgba(255, 255, 255, 0.12)",
        "white-alpha200": "rgba(255, 255, 255, 0.2)",
        "white-alpha300": "rgba(255, 255, 255, 0.36)",
        "white-alpha700": "rgba(255, 255, 255, 0.7)",
        "white-alpha800": "rgba(255, 255, 255, 0.86)",
        "white": "#ffffff",
        "gray25": "#fafafa",
        "gray50": "#f5f5f5",
        "gray100": "#eeeeee",
        "gray200": "#e0e0e0",
        "gray300": "#cccccc",
        "gray400": "#9e9e9e",
        "gray500": "#757575",
        "gray600": "#5c5c5c",
        "gray700": "#424242",
        "gray800": "#292929",
        "teal100": "#adede0",
        "teal200": "#7ee6d8",
        "teal300": "#50d9cb",
        "teal400": "#2accc1",
        "teal500": "#00a8ab",
        "teal700": "#00919c",
        "teal-bright100": "#9cf7e5",
        "teal-bright200": "#60ebd8",
        "teal-bright400": "#02dfd8",
        "teal-bright700": "#00a4b6",
        "blue100": "#a8e7f0",
        "blue200": "#76d9e8",
        "blue300": "#4dcce3",
        "blue400": "#21bddb",
        "blue500": "#00aed1",
        "blue-600": "#0095c2",
        "blue-700": "#0181b0",
        "blue-bright-100": "#93f1ff",
        "blue-bright-200": "#60e1f7",
        "blue-bright400": "#08c5e7",
        "blue-bright700": "#0081c2",
        "sky100": "#c1dbf5",
        "sky-bright100": "#a3dcff",
        "sky300": "#83aef7",
        "sky400": "#729df3",
        "sky600": "#537ced",
        "sky700": "#4a6ae8",
        "sky-bright200": "#82c7ff",
        "sky-bright400": "#5890ff",
        "sky-bright700": "#3953f9",
        "purple300": "#c090f0",
        "purple100": "#d9caf8",
        "purple-bright100": "#e2bdff",
        "purple-bright-400": "#bc65ff",
        "purple200": "#caacf2",
        "sky200": "#9ac1f5",
        "purple400": "#be80ed",
        "purple700": "#8650bf",
        "purple500": "#ab6bdb",
        "purple600": "#955acc",
        "purple-bright200": "#d09bff",
        "pink-bright400": "#ff61a8",
        "purple-bright700": "#8201e7",
        "pink400": "#f76eab",
        "pink300": "#fc90c3",
        "pink-100": "#f7cde6",
        "pink200": "#fab1d8",
        "pink600": "#d02f82",
        "pink700": "#b22076",
        "pink-bright100": "#ffccf6",
        "pink500": "#eb4f95",
        "pink-bright700": "#b0007f",
        "pink-bright200": "#ff9cde",
        "red100": "#fac8ca",
        "red200": "#f79d9e",
        "red300": "#f77b74",
        "red400": "#f65948",
        "red500": "#ed472f",
        "red600": "#db2b17",
        "red700": "#ca1c07",
        "red-bright100": "#ffb6ab",
        "red-bright400": "#fa2f2e",
        "red-bright200": "#ff8a81",
        "red-bright700": "#db0024",
        "orange100": "#ffe2a7",
        "orange400": "#fdae2c",
        "orange600": "#e88809",
        "orange200": "#ffd68e",
        "orange500": "#faa415",
        "orange700": "#d16900",
        "orange-bright100": "#ffe570",
        "orange-bright200": "#ffd95c",
        "orangey-bright400": "#ffbc12",
        "orange-bright700": "#f07801",
        "orange300": "#fcbf5c",
        "green100": "#d1f3a3",
        "green200": "#b5ec86",
        "green300": "#95de68",
        "green500": "#6cc644",
        "green400": "#83d459",
        "green600": "#3fad1c",
        "green700": "#018f19",
        "green-bright100": "#d7ff70",
        "green-bright200": "#b2fa55",
        "green-bright400": "#81f52e",
        "green-bright700": "#0fbd01",
      },
      fontSize: {
        catch1: ["72px", "96px"],
        catch2: ["56px", "72px"],
        catch3: ["40px", "56px"],
        heading1: ["32px", "44px"],
        heading2: ["24px", "36px"],
        heading3: ["18px", "28px"],
        subheading: ["16px", "24px"],
        leading: ["15px", "32px"],
        body1: ["15px", "28px"],
        body2: ["14px", "24px"],
        caption: ["12px", "16px"],
        button: ["14px", "16px"]
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
