
const layoutSafelist = () => {
  const breakpoints = ['', 'sm:', 'md:', 'lg:', 'xl:']
  const sizes = ['full', '1/2', '1/3', '1/4']

  return breakpoints.reduce((allClasses, bp) => {
    const classes = sizes.map(s => `${bp}w-${s}`)
    return [...allClasses, ...classes]
  }, [])
}

const safelist = [...layoutSafelist()]

module.exports = {
  jit: true,
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#111111',
        'off-black': '#1A1A1A',
        grey: '#D5D8DA',
        'grey-light': '#f2f2f5',
        white: '#FFFFFF',
        blue: '#3449B8',
        'blue-light': '#1799E1',
        purple: '#5C0F99'
      },
      fontFamily: {
        sans: ['Lausanne', 'system-ui']
      },
      fontSize: {
        huge: '120px',
        '4xl': '48px',
        '3xl': '40px',
        '2xl': '32px',
        xl: '26px',
        lg: '24px',
        md: '22px',
        base: '18px',
        sm: '15px',
        xs: '13px',
        xxs: '12px'
      },
      letterSpacing: {
        tighter: '-.02em',
        tight: '-.01em',
        normal: '0',
        wide: '.02em',
        wider: '.03em'
      },
      lineHeight: {
        tighter: '1.1',
        tight: '1.2',
        normal: '1.5'
      },
      screens: {
        xs: '400px',
        xsMax: { max: '399px' },
        sm: '650px',
        smMax: { max: '649px' },
        md: '800px',
        mdMax: { max: '799px' },
        lg: '1000px',
        lgMax: { max: '999px' },
        xl: '1150px',
        xlMax: { max: '1149px' },
        xxl: '1500px',
        xxlMax: { max: '1499px' }
      },
      spacing: {
        0: '0', // 0
        xxxs: '0.5rem', // 8
        xxs: '0.75rem', // 12
        xs: '1rem', // 16
        sm: '1.5rem', // 24
        md: '3rem', // 48
        lg: '5rem', // 80
        xl: '7.5rem', // 120
        xxl: '8.75rem' // 140
      },
      zIndex: { '-1': '-1' }
    }
  }
}
