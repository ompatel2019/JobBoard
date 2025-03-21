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
import EditJobsPage from './pages/EditJobsPage';

const App = () => {
  // Add new job
  const addJob = async (newJob) => { 
    const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs`, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(newJob),
    });
    return res.json();
  }

  // Delete job
  const deleteJob = async (id) => { 
    const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${id}`, {
      method: 'DELETE', 
    });
    return res.ok;
  }

  // Update job
  const updateJob = async (job) => { 
    const res = await fetch(`${import.meta.env.VITE_API_URL}/jobs/${job.id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(job),
    }); 
    return res.json();
  }
   
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobsPage addJobSubmit={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='/edit-job/:id' element={<EditJobsPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route> 
    )
  )
  return <RouterProvider router={router}/>;
}

export default App
