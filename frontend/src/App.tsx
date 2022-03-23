import React from 'react'
import { Link } from 'react-router-dom'

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'

import Layout from './core/layouts/Layout'
import './App.css'

const Home = () => {
  return (
    <div>
      <p>Welcome!</p>
      <p>
        Go <Link to='/journals'>here</Link> to start writing.
      </p>
    </div>
  )
}

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
