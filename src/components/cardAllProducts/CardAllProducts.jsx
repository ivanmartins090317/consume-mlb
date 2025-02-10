import { useContext } from "react"
import {ProductsContext} from "../../contexts/productsContext"
import { formattCurency } from "../../utils/formattCurency"

import "./cardAllProducts.css"

const CardAllProducts = () => {
  const { products } = useContext(ProductsContext)


  return (
    <div className="cards">
      {products.slice(0, 5).map((product) => (
        <div key={product.id} className="app">
          <div className="phone-listing">
            <img src={product.thumbnail} alt={product.title} />
            <div className="details">
              <div className="price-container">
                <p className="price">R$ {formattCurency(product.price)}</p>
                <p className="discount">5% OFF</p>
              </div>
              <p className="installments">12x R$ 84,64</p>
              <p className="shipping">Frete grátis</p>
              <p className="model">{product.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { CardAllProducts }
