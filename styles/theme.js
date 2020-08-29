export default {
  breakpoint: {
    phone: "0rem",
    tabletPortrait: "37.5rem", // 600px
    tabletLandscape: "56.25rem", // 900px
    desktopM: "75rem", // 1200px
    desktopL: "93.75rem", // 1500px
    desktopXL: "112.5rem", // 1800px
    desktopXXL: "125rem", // 2000px
  },
  font: {
    sansSerif: "Montserrat, sans-serif",
    serif: "Arvo, serif",
  },
  color: {
    primary: {
      main: "#6200ea",
      light: "#651fff",
    },
    secondary: {},
    blueViolet: "#311b92",
    white: "#FFFFFF",
    black: "#000000",
    light: "#F3F3F3",
    dark: "#333333",
    grey: {
      1: "#333333",
      2: "#0D0D0D",
      3: "#1A1A1A",
    },
  },
  size: {
    2: "0.125rem",
    4: "0.25rem",
    8: "0.5rem",
    12: "0.75rem",
    16: "1rem",
    24: "1.5rem",
    32: "2rem",
    48: "3rem",
    64: "4rem",
    96: "6rem",
    toRem: (pixel) => `${pixel / 16}rem`,
  },
  shadow: {
    small: "0px 4px 4px rgba(0, 0, 0, 0.6);",
    big: "0px 8px 8px rgba(0, 0, 0, 0.6);",
  },
};
