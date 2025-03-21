import React, { useEffect, useState, CSSProperties } from 'react'
import JobListing from './JobListing'
import Spinners from './Spinners';

const JobListings = ({isHome}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = isHome ? 'api/jobs?_limit=3' : 'api/jobs';
      setLoading(true); 
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, [])
  

    return (
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">{isHome ? `Recent Jobs` : 'Browse Jobs'}</h2>
          {
            loading ?       
            <Spinners loading={loading}/>
          : 
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} job={job} />
              ))}
            </div>
          }
        </div>
      </section>
  )
}

export default JobListings
