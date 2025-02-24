import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import ProjectPage from '../components/ProjectPage/ProjectPage'

const page = () => {
  return (
    <div>
        <NavBar/>
        <div>
        <h1>
            Projects
        </h1>
        </div>
        <div>
          <ProjectPage/>
        </div>
        <Footer/>
    </div>
  )
}

export default page