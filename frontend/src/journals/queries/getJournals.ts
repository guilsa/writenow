import { useQuery } from 'react-query'

const getJournals = async () => {
  const res = await fetch('http://localhost:3001/api/journals')
  return res.json()
}

export default function useJournals() {
  return useQuery('journals', getJournals)
}
