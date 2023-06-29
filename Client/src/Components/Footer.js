import React from 'react';

const Footer = () => {
    return (
        <footer className="w-screen flex flex-col bg-gray-800 text-white p-4">
            <div className='flex justify-between'>
                <div className="flex flex-col">
                    <span className="font-bold">Contact Details:</span>
                    <span>TollFree : <span >10755908</span> </span>
                    <span>Covid Helpline : <span >1075</span> </span>
                    <span>WhatsApp Number :<span>91+9942456712 </span></span>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <lable className="text-white">
                        Feedback
                    </lable>
                    <input type="text" className="w-[270px] text-black border border-gray-400 p-2  rounded" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Submit</button>
                </div>
            </div>
            <div className=" flex justify-center">
                © 2023 Covid Vaccine. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;