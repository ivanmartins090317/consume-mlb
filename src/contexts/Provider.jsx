import { ProductsContext } from "./productsContext"
import {useState} from "react"



const Provider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  const value = {
    products,
    setProducts,
    count,
    setCount,
  }

  
 

  return (
    <ProductsContext.Provider value={(value)}>
      {children}
    </ProductsContext.Provider>
  )
}

export { Provider }
