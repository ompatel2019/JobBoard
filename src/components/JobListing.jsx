import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const JobListing = ({ job }) => {
    const [showMore, setShowMore] = useState(false);
    let description = job.description; 
    if (!showMore) { 
        description = description.substring(0, 90) + '...';
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
            <div className="mb-5">{description}</div>
            <button onClick={() => (setShowMore(prev => !prev))} className="text-indigo-500 mb-5 hover:text-indigo-600">{ showMore ? 'Less' : 'More'}</button>
            <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
            <div className="border border-gray-100 mb-5"></div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="flex gap-2">
                <i class="bi bi-geo-alt"></i>
                <div className="text-orange-700 mb-3"><i className="fa-solid fa-location-dot text-lg"></i> {job.location}</div>
            </div>
            <Link to={`/jobs/${job.id}`} className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">Read More</Link>
            </div>
        </div>
        </div>
  )
}

export default JobListing
