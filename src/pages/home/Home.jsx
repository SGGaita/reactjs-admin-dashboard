import React from 'react'
import "./home.scss"
import { Sidebar, Navbar,Widgets} from "../../components"

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          {/*Edit widgets in components/widget DIR*/}
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earnings"/>
          <Widgets type="balance"/>
        </div>

        <div className="charts">
          
        </div>
      </div>
    </div>
    
  )
}

export { Home }