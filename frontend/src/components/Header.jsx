import React from "react"
import Logo from "../assets/Logo.png"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { logout1, reset1 } from '../features/adminAuth/authSlice'

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user} = useSelector((state) => state.auth)
  
    const onLogout = () => {
      dispatch(logout())
      dispatch(reset())
      navigate('/home')
    }

    const navigate1 = useNavigate()
    const dispatch1 = useDispatch()
    const { admin } = useSelector((state1) => state1.auth1)
    const onLogout1 = () => {
        dispatch1(logout1())
        dispatch1(reset1())
        navigate1('/home')
      }

    return (
        <div className="h-[90px] flex items-center">
            <div className="justify-between items-center w-screen h-[72px] shadow-header_box flex pl-[100px] shadow-2xl shadow-blue-100">
                <div className="flex items-center justify-center">
                    <img alt="img" src={Logo} className="pr-3 h-[50px] w-[50px]" />
                    <div className="flex gap-2 cursor-pointer font-bold text-[24.69px] ">
                        <p className=" text-[#9D1C7F]">Covid</p>
                        <p className=" text-[#2B2A85]">Vaccination</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="pt-[23px] pb-[22px] pr-[30px] text-[20px] text-[#2B2A85]">
                        <ul className="flex gap-[30px] font-semibold ">
                            <a className=" pb-2 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/">Home</a>
                            
                             {admin ? (
          <li>
            <button onClick={onLogout1} className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white">
              Admin Logout
            </button>
          </li>
        ) : (
          <>
            <li>
            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/adminLogin">Admin LogIn</a>
            </li>
          </>
        )}
                             <a className=" pb-2 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/search">Centres</a>
                            {user ? (<>
          <li>
            <button onClick={onLogout} className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white">
              User Logout
            </button>
          </li>
                      <li>
                      <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                                      hover:text-white" href="/apply">Apply</a>
                      </li></>
          
        ) : (
          <>
            <li>
            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/login">User LogIn</a>
            </li>
            <li>
            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/signUp">User SignUp</a>
            </li>
          </>
        )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header