import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './ErrorPage';
import Home from './Home';
import Statistics from './Statistics';
import AppliedJobs from './AppliedJobs';
import Blog from './Blog';
import JobDetails from './JobDetails';
import ApplyCart from './ApplyCart';

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    loader: () => fetch('jobData.json'),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('jobData.json'),
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: () => fetch('assignments.json'),

      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "jobDetails/:joId",
        element: <JobDetails />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)
