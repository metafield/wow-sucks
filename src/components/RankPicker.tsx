import { Rank, ReactInputEvent } from '../types'
import { FC, useState } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  selected: boolean
}
const Container = styled.div`
  background-color: #aaa;
  color: ${(props: ContainerProps) => (props.selected ? 'red' : 'blue')};
  text-shadow: 2px 2px black;
`

interface Props {
  rank: Rank
  selected: boolean
  clicked: (rankNum: number) => void
  onUpdate: (percent: number) => void
}

export const RankPicker: FC<Props> = ({
  rank,
  clicked,
  selected,
  onUpdate,
}) => {
  const [rankPercent, setRankPercent] = useState(1)

  // rank 14's can't use a picker
  if (rank.number === 14) return null

  const handleSlide = (e: ReactInputEvent) => {
    const percent = e.target.value
    setRankPercent(+percent)
    onUpdate(+percent)
  }

  return (
    <Container selected={selected} onClick={() => clicked(rank.number)}>
      <h2>Rank {rank.number} </h2>
      <input onChange={(e) => handleSlide(e)} type="range" defaultValue={0} />
      <h2>{rankPercent}%</h2>
    </Container>
  )
}
