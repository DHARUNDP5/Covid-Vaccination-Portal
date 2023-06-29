import React from 'react'

const Home = () => {
    return (
        <div className='h-[732px]  w-screen bg-background bg-cover'>
            <div className='h-[697px] flex justify-center items-center'>
                <div className="text-center">
                    <h1 className="text-[40px] font-bold ">COVID-19 Vaccination</h1>
                    <p className="my-4 text-[28px]">
                        COVID-19 vaccination reduces risk for infection, serious illness, and death.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
                        Get Vaccination
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home