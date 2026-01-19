
import Saidbar from '../Saidbar/Saidbar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='flex min-h-screen'>
     
      <Saidbar />


      <main className='flex-1 ml-80 p-10'> 
        <Outlet />
      </main>
    </div>
  )
}

export default Layout