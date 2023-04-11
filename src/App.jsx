import { createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { Outlet, useLoaderData } from 'react-router-dom'

export const JobDataContext = createContext([]);

function App() {
  const jobData  = useLoaderData()

  return (
    <div className="App">
      <JobDataContext.Provider value={jobData}>
        <Header></Header>
        <Outlet></Outlet>
      </JobDataContext.Provider>
    </div>
  )
}

export default App
