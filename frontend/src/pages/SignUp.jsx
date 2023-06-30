import React from 'react'
import { useState, useEffect } from 'react'

const SignUp = () => {
    const states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh',
        'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
        'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
        'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim',
        'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
    const [selectedState, setSelectedState] = useState(states[0]);
    return (
        <div className='bg-blue-100 h-[950px] w-screen flex justify-center items-center'>
            <form className=" w-[550px] bg-white shadow-xl ">
                <h1 className='text-center text-2xl font-bold mt-[20px]'>Sign Up</h1>
                <div className='flex flex-col gap-[20px] items-center'>
                    <div className='mt-[20px] flex flex-col gap-[15px]'>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Name :</lable>
                            <input type="text" className=" w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Email :</lable>
                            <input type="email" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Password :</lable>
                            <input type="password" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Confirm Password :</lable>
                            <input type="password" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Aadhaar Number :</lable>
                            <input type="text" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Mobile Number :</lable>
                            <input type="tel" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Date of Birth :</lable>
                            <input type="date" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Aadhaar Number :</lable>
                            <input type="text" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">City Name :</lable>
                            <input type="text" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className=''>District:</lable>
                            <input type="text" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>

                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">State :</lable>
                            <select
                                className='w-[270px] border border-gray-400 p-2 rounded'
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}>
                                {states.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Pin Code :</lable>
                            <input type="number" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                    </div>
                    <div className=' mb-[20px] flex items-center justify-center'>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp