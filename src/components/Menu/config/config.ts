import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl, pancakeBunniesAddress, pancakeSquadAddress } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
    href: '#/prediction',
    icon: 'Trophy',
    items: [
      {
        label: t('Prediction (BETA)'),
        href: '#/prediction',
      },
      {
        label: t('Lottery'),
        href: '#/lottery',
      },
    ],
  },
  {
    label: t('NFT (Comming Soon)'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
        status: {
          text: t('Live'),
          color: 'failure',
        },
      },
      {
        label: t('Runnies'),
        href: `${nftsBaseUrl}/collections/${pancakeBunniesAddress}`,
      },
      {
        label: t('Squad'),
        href: `${nftsBaseUrl}/collections/${pancakeSquadAddress}`,
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '#/info',
      },
      {
        label: t('IFO'),
        href: '#/ifo',
      },
      {
        label: t('Voting'),
        href: '#/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '#/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@devilswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://devilswap.gitbook.io/devilswap/',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
