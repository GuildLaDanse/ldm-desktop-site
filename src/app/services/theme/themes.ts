export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: 'light',
  properties: {
    '--main-background': '        \
    linear-gradient(              \
      rgba(255, 255, 255, 0.85),  \
      rgba(255, 255, 255, 0.85)   \
    ),                            \
    url(\'/assets/images/wallpapers/background.jpg\')',

    '--default-color': 'black',

    '--nav-background': 'rgb(0, 0, 0)',
    '--default-background': 'rgb(255, 255, 255)',
    '--content-background': 'rgb(255, 255, 255)',
    '--focus-background': 'rgb(235, 235, 235)',

    '--menu-tile-background': 'rgba(75, 75, 75, .60)',
    '--menu-tile-background-hover': 'rgba(75, 75, 75, .85)'
  }
};

export const dark: Theme = {
  name: 'dark',
  properties: {
    '--main-background': '     \
    linear-gradient(           \
      rgba(26, 26, 26, 0.85),  \
      rgba(26, 26, 26, 0.85)   \
    ),                         \
    url(\'/assets/images/wallpapers/background.jpg\')',

    '--default-color': 'rgb(240, 240, 240)',

    '--nav-background': 'rgba(18, 18, 20, 0.8)',
    '--default-background': 'rgb(18, 18, 20)',
    '--content-background': 'rgb(21, 21, 24)',
    '--focus-background': 'rgb(35, 35, 35)',

    '--menu-tile-background': 'rgba(110, 110, 110, .60)',
    '--menu-tile-background-hover': 'rgba(110, 110, 110, .85)'
  }
};
