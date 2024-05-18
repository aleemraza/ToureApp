import React,{useEffect, useState} from 'react'
import TeamPage from './TeamPage';
import CreateToure from './CreateToure';
import Booking from '../pages/adminPages/Booking'
import User from './User'
import {useNavigate} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import {useData} from '../components/layouts/DataContext'
const token = localStorage.getItem('token')
const Deshboard = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState('dashboard'); // State to track current page
  const [islogin, setisLogin] = useState(false)
  const [user , setUser] = useState(null)
  const {shareData,toteluser,toteltour}  = useData()
  useEffect(()=>{
    if(token){
      const decode = jwtDecode(token)
      setUser({name:decode.name,phote:decode.phote})
    }else{
      setUser(null)
    }
    
  },[shareData,toteluser,toteltour])

  //Logout Api
  const logout = async()=>{
    try{
      const res = await fetch('http://127.0.0.1:8080/api/vi/users/logout',{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        },
      })
      if(res.ok){
        localStorage.removeItem('token');
        setisLogin(false);
        navigate('/login');
      }else{
        console.log("error")
      }
    }catch(eror){
      console.log("the api error", eror)
    }
  }
  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Render different content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case 'team':
        return <TeamPage />;
      case "CreateToure":
        return <CreateToure/>;
      case "User":
        return <User/>
      case "Booking":
        return <Booking/>    
      case 'dashboard':
        return (
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Dashboard</h2>
            <p className="text-gray-600 mt-2">wellcome to our  world</p>
            <p>Total Booking {shareData}</p>
            <p>Total User : {toteluser}</p>
          </div>
        );
      // Add cases for other pages as needed
      default:
        return (
          <div>
            <h2 className="text-gray-800 text-lg font-semibold">Not Found</h2>
            <p className="text-gray-600 mt-2">Page not found.</p>
          </div>
        );
    }
  };
  console.log("tour",toteltour)
  return (
    <>
     <div className="flex flex-col h-screen">
      {/* Header */}

      <header className="bg-white text-black py-4 px-6 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* User Profile */}
          <div className="flex items-center">
            <img className="w-8 h-8 rounded-full" src="{user.phote}" alt="User Avatar" />
            <span className="ml-2"></span>
          </div>
          {/* Logout Button */}
          <button onClick={logout} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none">Logout</button>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex-1 bg-gray-200 flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800">
          <div className="p-6">
            <h2 className="text-white text-lg font-semibold">Navigation</h2>
          </div>
          <nav className="mt-10">
            {/* Use buttons with onClick to change page */}
            <button onClick={() => handlePageChange('dashboard')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Dashboard</button>
            <button onClick={() => handlePageChange('team')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Team</button>
            <button onClick={() => handlePageChange('CreateToure')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">CreateToure</button>
            <button onClick={() => handlePageChange('User')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">User</button>
            <button onClick={() => handlePageChange('Booking')} className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white">Booking</button>
            {/* Add other navigation links */}
          </nav>
        </div>
        {/* Main Content Area */}
        <div className="flex-1  text-gray-600 body-font">
          <div className="p-6 ">
            {renderContent()} {/* Render content based on current page */}
          </div>
        </div>
      </div>
    </div>

    </>
)
}

export default Deshboard
