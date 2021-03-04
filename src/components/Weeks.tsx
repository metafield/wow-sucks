import React from 'react'
import styled from 'styled-components'
import { Week } from '../types'
import { WeekRow } from './WeekRow'

const Container = styled.div``

interface Props {
  weeks: Week[]
  onBracketChange: (bracketIndex: number, weekIndex: number) => void
}

export const Weeks: React.FC<Props> = ({ weeks, onBracketChange }) => {
  const handleBracketChange = (bracket: number, weekIndex: number) => {
    onBracketChange(bracket, weekIndex)
  }

  return (
    <Container>
      {weeks.map((week, i) => (
        <WeekRow
          key={Math.random()}
          week={week}
          onBracketChange={(bracket: number) => handleBracketChange(bracket, i)}
        />
      ))}
    </Container>
  )
}
