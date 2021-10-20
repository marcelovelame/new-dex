import { ContextApi } from 'contexts/Localization/types'
import BigNumber from 'bignumber.js'

export const getEarningsText = (
  numFarmsToCollect: number,
  hasCakePoolToCollect: boolean,
  earningsBusd: BigNumber,
  t: ContextApi['t'],
): string => {
  const data = {
    earningsBusd: earningsBusd.toString(),
    count: numFarmsToCollect,
  }

  let earningsText = t('%earningsBusd% to collect', data)

  if (numFarmsToCollect > 0 && hasCakePoolToCollect) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsBusd% to collect from %count% farms and DEVIL pool', data)
    } else {
      earningsText = t('%earningsBusd% to collect from %count% farm and DEVIL pool', data)
    }
  } else if (numFarmsToCollect > 0) {
    if (numFarmsToCollect > 1) {
      earningsText = t('%earningsBusd% to collect from %count% farms', data)
    } else {
      earningsText = t('%earningsBusd% to collect from %count% farm', data)
    }
  } else if (hasCakePoolToCollect) {
    earningsText = t('%earningsBusd% to collect from DEVIL pool', data)
  }

  return earningsText
}
