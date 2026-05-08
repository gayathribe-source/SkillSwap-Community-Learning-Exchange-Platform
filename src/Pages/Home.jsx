import React from 'react'
import { useLocation } from 'react-router-dom'


function Home() {
  const location = useLocation();
  const user = location.state?.user; 
  return (
    <div> Welcome {user?.name|| "User"}</div>

  )
}

export default Home