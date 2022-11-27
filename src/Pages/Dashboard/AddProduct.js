import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const AddProduct = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <div>Email</div>
    </div>
  )
}

export default AddProduct
