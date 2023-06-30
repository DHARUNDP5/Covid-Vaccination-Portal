import { useDispatch } from 'react-redux'

function Search({ item }) {
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{item.name}</h2>
    </div>
  )
}

export default Search