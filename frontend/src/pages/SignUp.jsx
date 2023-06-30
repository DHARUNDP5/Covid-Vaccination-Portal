import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const SignUp = () => {
    const states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh',
    'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
    'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim',
    'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];

    const [selectedState, setSelectedState] = useState(states[0]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        dob:'',
        aadharNumber:'',
        mobileNumber:'',
        district:'',
        cityName:'',
        pincode:'',
        doorNumber:''
      })
    
      const { name, email, password, password2,dob, aadharNumber, mobileNumber, district, cityName, pincode, doorNumber } = formData
    
      const navigate = useNavigate()
      const dispatch = useDispatch()
    
      const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
      )
    
      useEffect(() => {
        if (isError) {
          toast.error(message)
        }
    
        if (isSuccess || user) {
          navigate('/apply')
        }
    
        dispatch(reset())
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
      const onChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
      }
    
      const onSubmit = (e) => {
        e.preventDefault()
    
        if (password !== password2) {
          toast.error('Passwords do not match')
        } else {
          const userData = {
            name,
            email,
            password,
            dob,
            aadharNumber,
            mobileNumber,
            district,
            cityName,
            pincode,
            doorNumber,
            state: selectedState
          }
    
          dispatch(register(userData))
        }
      }
    
      if (isLoading) {
        return <Spinner />
      }


    return (
        <div className='bg-blue-100 h-[950px] w-screen flex justify-center items-center'>
            <form onSubmit={onSubmit} className=" w-[550px] bg-white shadow-xl ">
                <h1 className='text-center text-2xl font-bold mt-[20px]'>Sign Up</h1>
                <div className='flex flex-col gap-[20px] items-center'>
                    <div className='mt-[20px] flex flex-col gap-[15px]'>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Name :</lable>
                            <input type="text" 
                            onChange={onChange}
                            value={name}
                            id='name'
                            name='name'
                            className=" w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Email :</lable>
                            <input type="email" 
                            id='email'
                            name='email'
                            onChange={onChange}
                            value={email}
                            className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Password :</lable>
                            <input type="password"
                            name='password'
                            id='password'
                            value={password}
                            onChange={onChange}
                            className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Confirm Password :</lable>
                            <input type="password"
                            id='password2'
                            name='password2'
                            value={password2}
                            onChange={onChange}
                            className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Aadhaar Number :</lable>
                            <input type="number" 
                             onChange={onChange}
                             value={aadharNumber}
                             id='aadharNumber'
                             name='aadharNumber'
                            className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Mobile Number :</lable>
                            <input type="number"
                             onChange={onChange}
                             value={mobileNumber}
                             id='mobileNumber'
                             name='mobileNumber'
                             className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">Date of Birth :</lable>
                            <input type="date" 
                             onChange={onChange}
                             value={dob}
                             name='dob'
                             id='dob'
                            className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className="">City Name :</lable>
                            <input type="text"
                             onChange={onChange}
                             value={cityName}
                             id='cityName'
                             name='cityName'
                             className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className=''>District:</lable>
                            <input type="text" 
                             onChange={onChange}
                             value={district}
                             id='district'
                             name='district'
                            className="w-[270px] border border-gray-400 p-2  rounded" />
                        </div>
                        <div className='flex gap-6 items-center justify-between'>
                            <lable className=''>Door Number:</lable>
                            <input type="text" 
                             onChange={onChange}
                             value={doorNumber}
                             id='doorNumber'
                             name='doorNumber'
                            className="w-[270px] border border-gray-400 p-2  rounded" />
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
                            <input type="number"
                             onChange={onChange}
                             value={pincode}
                             id='pincode'
                             name='pincode'
                             className="w-[270px] border border-gray-400 p-2  rounded" />
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