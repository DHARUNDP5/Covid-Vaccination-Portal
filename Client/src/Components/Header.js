import React from "react";
import Logo from "./Assets/Logo.png";

const Header = () => {
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
                            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/">Home</a>
                            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/admin">Admin LogIn</a>
                            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/user">User LogIn</a>
                            <a className=" p-1 hover:rounded hover:bg-gradient-to-b from-[#282B85] to-[#9A1D80]
                            hover:text-white" href="/signup">User SignUp</a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
