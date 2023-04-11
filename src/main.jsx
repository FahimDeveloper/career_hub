import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import featuredJobs from "../public/featuredJobs.json"
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../public/featuredJobs.json")
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch("../public/featuredJobs.json")
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/details/:id",
        element: <JobDetails />,
        loader: () => fetch("../public/featuredJobs.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
