import { useStateVoting } from '../../context/votingContext'
import styled from 'styled-components'

const ModeContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  margin: 20px 0 0 20px;
  padding: 30px;
  max-height: 81%;
`

const Checks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Label = styled.label`
  font-size: 30px;
  margin: 40px 0;
`

const Title = styled.h2`
  font-size: 30px;
`

const VotingOptions = () => {
  const { setMode, mode } = useStateVoting();

  const handleMode = ({ target }) => {
    setMode(() => (target.type !== 'checkbox' ? target.value : target.name));
  };

  return (
    <ModeContainer>
      <Title>Mode</Title>
      <Checks>
        <Label>
          <input
            type="radio"
            value="numero"
            checked={mode === 'numero'}
            onChange={handleMode}
          />
          Numbers
        </Label>
        <Label>
          <input
            type="radio"
            value="percentage"
            checked={mode === 'percentage'}
            onChange={handleMode}
          />
          Percentage
        </Label>
        <Label>
          <input
            type="radio"
            value="both"
            checked={mode === 'both'}
            onChange={handleMode}
          />
          Both
        </Label>
      </Checks>
    </ModeContainer>
  );
}

export default VotingOptions;
