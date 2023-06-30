import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { useState } from 'react'
import { createApply, reset, getCentres, getApply } from '../features/apply/applySlice'

const Apply = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { apply, centres, isLoading, isError, message } = useSelector((state) => state.apply)

  const [selectedCentre, setSelectedCentre] = useState('')
  const [date, setDate] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createApply({ date, centreId: selectedCentre }))
  }

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getCentres())
    dispatch(getApply())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  const getCentreName = (centreId) => {
    const selectedCentre = centres.find((centre) => centre._id === centreId)
    return selectedCentre ? selectedCentre.name : ''
  }

  return (
    <div className='bg-gradient-to-b from-[#E1F3FF] to-[#E4D7FF] h-[730px] w-screen flex justify-center items-center'>
      <form onSubmit={onSubmit} className='w-[550px] bg-white shadow-xl'>
        <h1 className='text-center text-2xl font-bold mt-[20px]'>Apply Covid Vaccination</h1>
        <div className='flex flex-col gap-[20px] items-center'>
          <div className='mt-[20px] flex flex-col gap-[15px]'>
            <div className='flex gap-6 items-center justify-between'>
              <label className=''>State :</label>
              <select
                className='w-[270px] border border-gray-400 p-2 rounded'
                value={selectedCentre}
                onChange={(e) => setSelectedCentre(e.target.value)}
              >
                {centres.map((centre) => (
                  <option key={centre._id} value={centre._id}>
                    {centre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex gap-6 items-center justify-between'>
              <label className=''>Date of Vaccination :</label>
              <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
                value={date}
                id='date'
                name='date'
                className='w-[270px] border border-gray-400 p-2  rounded'
              />
            </div>
            <div className=' mb-[20px] flex items-center justify-center'>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className='overflow-x-auto'>
        <table className='table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-2'>Centre Name</th>
              {apply.map((item) => {
                return <th className='px-4 py-2'>{getCentreName(item.centre)}</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='px-4 py-2'>Date</th>
              {apply.map((item) => {
                return <th className='px-4 py-2'>{item.date}</th>
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Apply
