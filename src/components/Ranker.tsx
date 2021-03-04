import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import ranks from '../ranks'
import { Week } from '../types'
import { RankPicker } from './RankPicker'
import { Weeks } from './Weeks'
import { createWeek } from '../utils/createWeek'

const Ranks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.5em;
`
const Container = styled.div``
const defaultBracket = 0

export const Ranker: React.FC = () => {
  const [selectedRank, setSelectedRank] = useState(3)
  const [selectedPercent, setSelectedPercent] = useState(1)
  const [weeks, setWeeks] = useState<Week[]>([
    createWeek(selectedRank, selectedPercent, defaultBracket),
  ])
  // holds the current bracket for each week
  const [brackets, setBrackets] = useState([defaultBracket])

  useEffect(() => {
    update()
  }, [brackets, selectedPercent, selectedRank])

  const update = () => {
    const firstWeek = createWeek(selectedRank, selectedPercent, brackets[0])
    const otherWeeks = []
    const weekCount = brackets.length

    let prevWeek = firstWeek
    for (let i = 1; i < weekCount; i++) {
      const week = createWeek(
        prevWeek.ending.rank,
        prevWeek.ending.percent,
        brackets[i]
      )
      otherWeeks.push(week)
      prevWeek = week
    }

    setWeeks([firstWeek, ...otherWeeks])
  }

  const handleBracketChange = (bracketIndex: number, weekIndex: number) => {
    const newBrackets = [...brackets]
    newBrackets[weekIndex] = bracketIndex
    setBrackets(newBrackets)
  }

  return (
    <Container>
      <Ranks>
        {ranks.map((rank) => (
          <RankPicker
            selected={selectedRank === rank.number}
            key={rank.number}
            rank={rank}
            clicked={setSelectedRank}
            onUpdate={setSelectedPercent}
          />
        ))}
      </Ranks>
      <p>bracket------------------start----------------end</p>
      <Weeks
        weeks={weeks}
        onBracketChange={(bracketIndex: number, weekIndex: number) =>
          handleBracketChange(bracketIndex, weekIndex)
        }
      />
      <button
        onClick={() => setBrackets((state) => [...state, defaultBracket])}
      >
        add {brackets.length}
      </button>
    </Container>
  )
}
