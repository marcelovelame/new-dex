import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://devilswap.gitbook.io/devilswap/social-accounts',
      },
      {
        label: t('Blog'),
        href: 'https://devilswap.gitbook.io/devilswap/',
      },
      {
        label: t('Community'),
        href: 'https://devilswap.gitbook.io/devilswap/social-accounts',
      },
      {
        label: t('DEVIL token'),
        href: 'https://devilswap.gitbook.io/devilswap/tokenomics/deviltoken-devil',
      },
      
    ],
  },
  
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/devilswap',
      },
      {
        label: t('Documentation'),
        href: 'https://devilswap.gitbook.io/devilswap/',
      },
      
      {
        label: t('Audits'),
        href: 'https://devilswap.gitbook.io/devilswap/',
      },

    ],
  },
]
