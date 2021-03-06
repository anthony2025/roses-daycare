export default () => ({
  primary: solarized.base02,
  accent: getRandomizedAccentColor(),
  opposite: solarized.base2,
  background: '#FAFAFA'
})

const getRandomizedAccentColor = () => {
  const colors = ['orange', 'red', 'magenta', 'violet', 'blue', 'cyan']
  const randomInteger = Math.floor(Math.random() * colors.length)
  return solarized[colors[randomInteger]]
}

const solarized = {
  base03: '#002B36',
  base02: '#073642',
  base01: '#586E75',
  base00: '#657B83',
  base0: '#839496',
  base1: '#93A1A1',
  base2: '#EEE8D5',
  base3: '#FDF6E3',
  yellow: '#B58900',
  orange: '#CB4B16',
  red: '#DC322F',
  magenta: '#D33682',
  violet: '#6C71C4',
  blue: '#268BD2',
  cyan: '#2AA198',
  green: '#859900'
}
