import { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider'

const AddProduct = () => {
  const { user } = useContext(AuthContext)

  return (
    <div>
      <div>
        <h3>Add Products:</h3>
      </div>
    </div>
  )
}

export default AddProduct
