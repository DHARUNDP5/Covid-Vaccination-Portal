import React from 'react'

const Apply=()=>{
  return (
    <div className='bg-gradient-to-b from-[#E1F3FF] to-[#E4D7FF] h-[730px] w-screen flex justify-center items-center'>
            <form className=" w-[550px] bg-white shadow-xl ">
                <h1 className='text-center text-2xl font-bold mt-[20px]'>Apply Covid Vaccination</h1>
                <div className='flex flex-col gap-[20px] items-center'>
                    <div className='mt-[20px] flex flex-col gap-[15px]'>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">CenterName :</lable>
                            <input type="text" className=" w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Date of Vaccination :</lable>
                            <input type="date" className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className=' mb-[20px] flex items-center justify-center'>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                        </div>
                        </div>
                        </form>
                        </div>
  )
}

export default Apply