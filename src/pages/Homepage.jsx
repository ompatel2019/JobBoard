import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'

const Homepage = () => {
  return (
    <>
        <Hero heroTitle="Become a React Dev" heroSubTitle="Find the React job that fits your skills and needs"/>
        <HomeCards/>
        <JobListings/>
    </>
  )
}

export default Homepage