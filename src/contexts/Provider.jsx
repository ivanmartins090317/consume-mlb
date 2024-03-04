import { ProductsContext } from "./productsContext"
import {useState} from "react"



const Provider = ({ children }) => {
  const [products, setProducts] = useState([])

  const value = {
    products,
    setProducts,
  }

 

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}

export { Provider }
