import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const AdminDashboard = () => {
  return (
    <div className='flex '>
        <Sidebar />
        <div className='w-full flex flex-col'>
            <Header />
            <Outlet/>
        </div>        
    </div>
  )
}

export default AdminDashboard
