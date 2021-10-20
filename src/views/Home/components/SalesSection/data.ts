import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x9e440a11C77E0888018ff904037cc10bD14fE1bA',
    text: 'Buy Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://devilswap.gitbook.io/devilswap/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'CAKE', alt: 'DEVIL token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'DevilSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://devilswap.gitbook.io/devilswap/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'DEVIL makes our world go round.',
  bodyText:
    'DEVIL token is at the heart of the DevilSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x9e440a11C77E0888018ff904037cc10bD14fE1bA',
    text: 'Buy DEVIL',
    external: false,
  },
  secondaryButton: {
    to: 'https://devilswap.gitbook.io/devilswap/',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'CAKE token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
