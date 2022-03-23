import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

import JournalsPage from './Journals'
import Layout from './core/layouts/Layout'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='journals' element={<JournalsPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
