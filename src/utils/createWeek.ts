import {
  getBaseRpFromRank,
  getBracketBonus,
  getRankByRp,
  getRankProgressByRp,
} from './formula'

export const createWeek = (rank: number, percent: number, bracket: number) => {
  const baseRp = getBaseRpFromRank(rank)
  const rp = (baseRp + 5000 * (percent / 100)) * 0.8

  return {
    bracket,
    rp,
    starting: {
      rank,
      percent,
    },
    ending: {
      rank: getRankByRp(rp + getBracketBonus(bracket)),
      percent: getRankProgressByRp(rp + getBracketBonus(bracket)),
    },
  }
}
