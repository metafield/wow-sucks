import React from 'react'
import styled from 'styled-components'
import Brackets from '../brackets'
import { Week } from '../types'

const Container = styled.div`
  display: flex;
  > * {
    margin-right: 2em;
  }
`

const Percent = styled.span`
  font-weight: bold;
  font-size: 1.2em;
`

const Rank = styled.span`
  font-family: sans-serif;
  font-size: 1.2em;
  margin-right: 2em;
`

interface Props {
  week: Week
  onBracketChange: (bracketIndex: number) => void
}

export const WeekRow: React.FC<Props> = ({ week, onBracketChange }) => {
  const handleBracketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onBracketChange(+e.target.value)
  }

  return (
    <Container>
      <select onChange={handleBracketChange} defaultValue={week.bracket}>
        {Brackets.map((bracket, i) => (
          <option key={bracket.rp} value={i}>
            {bracket.name}
          </option>
        ))}
      </select>
      <p>
        <Rank>Rank {week.starting.rank}</Rank>{' '}
        <Percent>{week.starting.percent}%</Percent>
      </p>

      <p>
        <Rank>Rank {week.ending.rank}</Rank>{' '}
        <Percent>{week.ending.percent}%</Percent>
      </p>
    </Container>
  )
}
