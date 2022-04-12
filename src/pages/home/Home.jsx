import React from 'react'
import "./home.scss"
import { Sidebar, Navbar } from "../../components"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        Home container
      </div>
    </div>
    
  )
}

export { Home }