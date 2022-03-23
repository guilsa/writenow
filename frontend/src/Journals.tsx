import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useQuery, useQueryClient } from 'react-query'
import useJournals from './journals/queries/getJournals'

export const JournalsList = () => {
  const { isLoading, isError, data, error } = useJournals()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error}</span>
  }

  console.log('query', data)

  return (
    <div>
      <ul>
        {data.journals.map((journal: any) => (
          <li key={journal.dateId}>
            <div
              style={{
                width: 600,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <Link to={''}>{journal.content}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const JournalsPage = () => {
  return (
    <div>
      <p>
        <button onClick={() => null}>Create New Journal</button>
      </p>

      <JournalsList />
    </div>
  )
}

export default JournalsPage
