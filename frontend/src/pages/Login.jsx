import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

    return (
        
<form onSubmit={onSubmit}>
        <div>
            <div className='h-[732px] flex justify-center items-center'>
                <div className='w-screen h-[300px] flex flex-col justify-between items-center'>
                    <div className=' shadow-lg '>
                        <div className='flex flex-col w-[500px] gap-[20px] m-[30px]'>
                            <h1 className='flex justify-center text-[20px] font-semibold'>
                                User Login
                            </h1>
                            <div className='flex justify-between'>
                                <label>Enter your Email :</label>
                                <input className='w-[325px] border border-gray-400 p-2  rounded'               type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange} />
                            </div>
                            <div className='flex justify-between'>
                                <label>Enter your password :</label>
                                <input className='w-[325px] border border-gray-400 p-2  rounded' type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange} />
                            </div >
                            <div className=' flex justify-between items-center'>
                                <button className='text-[16px] font-bold bg-gradient-to-b from-[#282B85] to-[#9A1D80] text-white 
                        px-[22px] py-[10px] rounded-[6px]' type='submit'>Log in as User</button>
                                <a href='' className=' text-blue-600'>Forget password ?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </form>
    )
}

export default Login