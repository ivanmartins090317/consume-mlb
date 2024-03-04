import { Search } from "lucide-react"
import { useState, useContext } from "react"
import { ProductsContext } from "../../contexts/productsContext"

import { Cart } from "../cart/Cart"
import { mlbFecth } from "../../controller/apiProducts"

import "./header.css"

const Header = () => {
  const { setProducts } = useContext(ProductsContext)
  const [searchProducts, setSearchProducts] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = await mlbFecth(searchProducts)

    setProducts(product)
  }

  return (
    <div className="header">
      <div className="container-header">
        <div className="logo">
          <img
            style={{ width: "130px" }}
            src="https://logodownload.org/wp-content/uploads/2016/08/mercado-livre-logo-0-1-1080x1080.png"
            alt="Mercado Livre Logo"
          />
        </div>
        <div>
          <form className="form-container">
            <input
              type="text"
              name="searchProducts"
              value={searchProducts}
              onInput={(e) => setSearchProducts(e.target.value)}
              placeholder="Buscar produtos, marcas e muito mais..."
            />
            <span></span>
            <button onClick={handleSubmit}>
              <Search className="search" />
            </button>
          </form>
        </div>
        <Cart />
      </div>
    </div>
  )
}

export { Header }
