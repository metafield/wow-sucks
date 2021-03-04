import ranks from '../ranks'
import brackets from '../brackets'

export const getRankByRp = (rp: number): number => {
  const rank = ranks.find((rank) => rank.baseRp <= rp)

  if (!rank) throw new Error(`cannot find rank with rp: ${rp}`)

  return rank.number
}

export const getRankProgressByRp = (rp: number): number => {
  const rank = ranks.find((rank) => rank.baseRp <= rp)
  if (!rank) throw new Error(`cannot find rank with rp: ${rp}`)

  const percentage = Math.round(((rp - rank.baseRp) / 5000) * 100)
  return percentage
}

export const getBaseRpFromRank = (rankNo: number) => {
  const rank = ranks.find((rank) => rank.number === rankNo)?.baseRp
  if (!rank) throw new Error(`cannot find rank with rankNo: ${rankNo}`)
  return rank
}

export const getBracketBonus = (bracketIndex: number) => {
  return brackets[bracketIndex].rp
}
