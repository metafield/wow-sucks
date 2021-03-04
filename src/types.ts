import React from 'react'

export type Rank = {
  number: number
  title: string
  baseRp: number
  newRp: number
}

export type Bracket = {
  name: string
  rp: number
}

export type Week = {
  rp: number
  bracket: number
  starting: { rank: number; percent: number }
  ending: { rank: number; percent: number }
}

export type ReactInputEvent = React.ChangeEvent<HTMLInputElement>
