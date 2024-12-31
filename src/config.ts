export const config = {
  enableAudio: true,
  clockUpdateInterval: 1000, // time in ms

  doorClosingDuration: 3000, // time in ms (match with value in App.module.css)
  doorOpeningDuration: 2000, // "

  minimumDate: new Date(1950, 0, 1), // January 1, 1950
  maximumDate: new Date(2024, 11, 31), // December 31, 2024

  assetsRoot: "https://timecapsule.brendantrepal.com/images/",

  enableHelp: false,
};
