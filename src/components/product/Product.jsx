import { useContext } from "react"
import { mlbFecth } from "../../controller/apiProducts"
import { InfoProduct } from "../infoProduct/InfoProduct"
import { ProductsContext } from "../../contexts/productsContext"
import "./product.css"

const Product = () => {
  const { products, setProducts } = useContext(ProductsContext)
  console.log(products)

  if (products.length === 0) {
    mlbFecth("iphone").then((data) => {
      setProducts(data)
    })
  }

  const betterProduct = products.length > 0 ? products[0] : null
  console.log(betterProduct)
  return (
    <>
      {betterProduct && (
        <div className="layout" key={betterProduct.id}>
          <div className="imagem">
            <img
              src={betterProduct.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
              alt={betterProduct.title}
            />
          </div>
          <InfoProduct
            title={betterProduct.title}
            price={betterProduct.price}
            discount={betterProduct.discount}
            condiction={betterProduct.condiction}
            avaliacao={betterProduct.available_quantity}
            installments={betterProduct.installments}
          />

          <hr />
        </div>
      )}
    </>
  )
}

export { Product }
