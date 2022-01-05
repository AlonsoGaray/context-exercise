import { useEffect } from 'react'
import { useStateVoting } from '../../context/votingContext'
import styled from "styled-components";

const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px;
  border-radius: 20px;
  max-width: 600px;
  height: 180px;
  margin: 20px 0 0 20px;
`;

const Votes = styled.p`
  font-size: 3.5rem;
  margin: 0;
`;

const TotalVotos = () => {
  const { players, totalVotes, setTotalVotes } = useStateVoting();
  
  useEffect(() => {
    let votes = players.map(p => p.votes)
    let totalVotosReduce = votes.reduce((prev, curr)=> prev + curr)
    setTotalVotes(totalVotosReduce)
  }, [players, setTotalVotes])

  return (
    <VotesContainer>
      <h2>TOTAL VOTES</h2>
      <Votes>{totalVotes}</Votes>
    </VotesContainer>
  );
};

export default TotalVotos;
