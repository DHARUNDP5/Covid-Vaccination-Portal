import React from 'react'

const UserLogin = () => {
    return (
        <div>
            <div className='h-[732px] flex justify-center items-center'>
                <div className='w-screen h-[300px] flex flex-col justify-between items-center'>
                    <div className=' shadow-lg '>
                        <div className='flex flex-col w-[500px] gap-[20px] m-[30px]'>
                            <h1 className='flex justify-center text-[20px] font-semibold'>
                                User Login
                            </h1>
                            <div className='flex justify-between'>
                                <label>Enter your name :</label>
                                <input className='w-[325px] border border-gray-400 p-2  rounded' type="text" placeholder="" />
                            </div>
                            <div className='flex justify-between'>
                                <label>Enter your password :</label>
                                <input className='w-[325px] border border-gray-400 p-2  rounded' type="password" placeholder="" />
                            </div >
                            <div className=' flex justify-between items-center'>
                                <button className='text-[16px] font-bold bg-gradient-to-b from-[#282B85] to-[#9A1D80] text-white 
                        px-[22px] py-[10px] rounded-[6px]'>Log in as User</button>
                                <a href='' className=' text-blue-600'>Forget password ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin