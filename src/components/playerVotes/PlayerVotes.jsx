import { useStateVoting } from '../../context/votingContext'
import styled from 'styled-components'

const VotesContainer = styled.div`
  display: flex;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 0 10px;
  margin: 20px;
  height: 275px;
`

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const ModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Players = () => {
  const { players, mode, totalVotes } = useStateVoting()
  const filtered = players.filter(p => 
    p.show === true
  )
  const votes = filtered.map(f => f.votes)
  const voteMode = votes.map(v => {
    switch(mode) {
      case 'numero':
        return `${v}`
      case 'percentage':
        return `${Math.round((v * 10000) / totalVotes) / 100}%`
      case 'both':
        return `${v} - ${Math.round((v * 10000) / totalVotes) / 100}%`
      default:
        break
    }
    return null
  })

  return (
      <VotesContainer>
        <NameContainer>
          {players.map((player, i) => (
            player.show === true ?
            <h2 key={i}>{player.name}</h2>
            : 
            <></>
          ))}
        </NameContainer>
        <ModeContainer>
          {voteMode.map((v, i) => (
            
            <h2 key={i}>{v}</h2>
          ))}            
        </ModeContainer>
      </VotesContainer>
  )
}

export default Players

