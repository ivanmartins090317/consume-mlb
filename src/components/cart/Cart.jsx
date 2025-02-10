import { useState, useContext, useEffect, useCallback} from "react"
import { ShoppingCart } from "lucide-react"
import { ProductsContext } from "../../contexts/productsContext"
import "./cart.css"

const Cart = () => {
  const [countProduct, setCountProduct] = useState(null)
  const { count } = useContext(ProductsContext)

  const handleCount = useCallback(() => {setCountProduct(count)}, [count])

  useEffect(() => {
    handleCount()
  }, [handleCount])

  return (
    <div className="cart">
      <ShoppingCart />
      {countProduct && <span className="countProduct">{countProduct}</span>}
    </div>
  )
}

export { Cart }
