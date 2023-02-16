/* eslint-disable prettier/prettier */
export const defaultTheme = {
  colors: {
    base: {
      background: '#FAFAFA',
      button: '#E6E5E5',
      card: '#F3F2F2',
      hover: '#D7D5D5',
      input: '#EDEDED',
      label: '#8D8686',
      subtitle: '#403937',
      text: '#574F4D',
      title: '#272221',
      white: '#FFFFFF',
    },
    brand: {
      'primary-dark': '#C47F17',
      'primary-light': '#F1E9C9',
      'primary': '#DBAC2C',
      'secondary-dark': '#4B2995',
      'secondary-light': '#EBE5F9',
      'secondary': '#8047F8',
    },
  },
  fonts: {
    header: "'Baloo 2', cursive",
    text: "'Roboto', sans-serif",
  },
} as const
