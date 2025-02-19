const plugin = require("tailwindcss/plugin");
const colors = require("../config/colors");

module.exports = plugin(({ addComponents }) => {
  addComponents(() => {
    const classNames ={
      "a.link": {
        color: colors["black-alpha500"],
        textDecoration: "underline",
      },
      "a.link:hover": {
        color: colors["black-alpha800"],
        transitionProperty: "color",
        transitionDuration: "100ms",
        transitionTimingFunction: "cubic-bezier(0.3, 0, 0.3, 1)",
      },
    };
    console.log({classNames});
    return classNames;
  });
});
