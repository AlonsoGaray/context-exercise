import Players from './components/players/Players'
import TotalVotes from './components/totalVotes/TotalVotes'
import PlayerVotes from './components/playerVotes/PlayerVotes'
import Filter from './components/filter/Filter'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  margin: 10px auto;
  box-shadow: 0 0 10px;
  border-radius: 20px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap-reverse;
`

const Left = styled.div`
  display: flex;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Container>
      <Players />
      <Bottom>
        <Left>
          <Filter />
        </Left>
        <Right>
          <TotalVotes />
          <PlayerVotes />
        </Right>
      </Bottom>
    </Container>
  );
}

export default App;
