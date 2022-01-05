import { useStateVoting } from '../../context/votingContext'
import styled from 'styled-components'

const PlayersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  margin: 10px 10px;
`

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`

const PlayerImg = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 10px;
  cursor: pointer;
	transition: .3s ease-in-out;
  overflow: hidden;

  &:hover{
	  transform: scale(1.1);
  }
`

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 7px;
  background-color: #555555;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover{
    background-color: #4CAF50; /* Green */
    color: #000000;
  }
`

const Players = () => {
  const { players, setPlayers } = useStateVoting()
  
  return (
      <PlayersContainer>
      {players.map((player, i) => (
        <PlayerContainer key={i}>
          <h3> {player.name} </h3>
          <PlayerImg
            key={i}
            src={player.img}
            id={i}
            alt='Imagen'
            style={player.show === true ? {filter: 'grayscale(0%)'} : {filter: 'grayscale(100%)'}}
            onClick={() => {
              const showHide = players.map((p) => {
                if (p.id === i) {
                  if (p.show === true ) {
                    p.show = false
                  } else if (p.show === false){
                    p.show = true
                  }
                }
                return p
              });
              setPlayers(showHide);
            }
          }
          />
          <Button 
            onClick={() => {
              const addVotes = players.map((p) => {
                if (p.id === i) {
                  p.votes++;
                  return p;
                }
                return p;
              });
              setPlayers(addVotes);
            }}
          >
            VOTE
          </Button>
        </PlayerContainer>
        ))}
      </PlayersContainer>
  )
}

export default Players