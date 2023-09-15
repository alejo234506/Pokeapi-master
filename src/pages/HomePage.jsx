import {Outlet} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
       <div> 
            <h1>HOMEPAGE </h1>
       <Outlet/>
       </div>
      
    </div>
  )
}

export default HomePage
