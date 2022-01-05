import { createContext, useContext, useState } from "react";
import Messi from '../img/messi.jpg'
import Maradona from '../img/maradona.jpg'
import Pele from '../img/pele.jpg'
import Ronaldinho from '../img/ronaldinho.jpg'

// Create Context
const VotingContext = createContext();

// Data
const listPlayers = [
  {
    id: 0,
    name: 'Lionel Messi',
    img: Messi,
    votes: 0,
    show: true
  },
  {
    id: 1,
    name: 'Ronaldinho',
    img: Ronaldinho,
    votes: 0,
    show: true
  },
  {
    id: 2,
    name: 'Diego Maradona',
    img: Maradona,
    votes: 0,
    show: true
  },
  {
    id: 3,
    name: 'Pele',
    img: Pele,
    votes: 0,
    show: true
  },
]

// Create Provider
export const VotingProvider = ({ children }) => {
  const [players, setPlayers] = useState(listPlayers)
  const [mode, setMode] = useState('numero')
  const [totalVotes, setTotalVotes] = useState(0)

  const valuesToPass = {
    players,
    setPlayers,
    totalVotes,
    setTotalVotes,
    mode,
    setMode,
  }

  return (
    <VotingContext.Provider value={valuesToPass}>
      {children}
    </VotingContext.Provider>
  )
}

// Export
export const useStateVoting = () => {
  const context = useContext(VotingContext)
  if (context === undefined) {
    throw new Error("useStateNumber must be used within a VotingProvider")
  }
  return context
}