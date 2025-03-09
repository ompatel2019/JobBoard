import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobsPage from './pages/AddJobsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Homepage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJobsPage/>}/>
      <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage/>}/>
    </Route> 
  )
)
const App = () => {
  return <RouterProvider router={router}/>;
}

export default App
