export const config = {
  enableAudio: false,
  clockUpdateInterval: 1000, // time in ms

  doorClosingDuration: 3000, // time in ms (match with value in App.module.css)
  doorOpeningDuration: 2000, // "

  minimumDate: new Date(1950, 0, 1), // January 1, 1950
  maximumDate: new Date(2024, 11, 31), // December 31, 2024

  assetsRoot: "https://timecapsule.brendantrepal.com/images/",

  enableHelp: false,

  sidebarWidth: 1024,

  initialDates: [
    new Date(1955, 10, 5), // 11/5/1955 - The date Marty McFly travels back to in "Back to the Future".
    new Date(1985, 8, 13), // 9/13/1985 - The release date of the original Super Mario Bros. game.
    new Date(1961, 3, 12), // 4/12/1961 - Yuri Gagarin becomes the first human in space.
    new Date(1969, 6, 20), // 7/20/1969 - The Apollo 11 moon landing.
    new Date(1970, 0, 1), // 1/1/1970 - The Unix epoch (the beginning of time for Unix systems).
    new Date(2015, 9, 21), // 10/21/2015 - The future date Marty McFly travels to in "Back to the Future Part II".
    new Date(1997, 7, 29), // 8/29/1997 - The date Skynet becomes self-aware in the Terminator series.
    new Date(2007, 5, 29), // 6/29/2007 - The release date of the first iPhone.
    new Date(2001, 7, 24), // 8/24/2001 - The release date of Windows XP.
  ],
};
