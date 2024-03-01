import { useState } from "react"
import { formattCurency } from "./utils/formattCurency"

import "./product.css"
import "./cardAllProducts.css"

const mlbFecth = async () => {
  const response = await fetch(
    "https://api.mercadolibre.com/sites/MLB/search?q=sansung",
  )
  const data = await response.json()
  return data.results
}
const CardAllProducts = ({ price, title, image }) => {
  return (
    <div className="app">
      <div className="phone-listing">
        <img src={image} alt={title} />
        <div className="details">
          <div className="price-container">
            <p className="price">R$ {price}</p>
            <p className="discount">5% OFF</p>
          </div>
          <p className="installments">12x R$ 84,64</p>
          <p className="shipping">Frete grátis</p>
          <p className="model">{title}</p>
        </div>
      </div>
    </div>
  )
}
const InfoProduct = ({ title, price, discount, condiction, avaliacao }) => {
  return (
    <div className="info-description">
      <a href="" className="mais-produtos">
        Conferir mais produtos da marca Samsung
      </a>
      <p className="condiction">
        {condiction ? "Novo" : null} | +10 mil vendidos
      </p>
      <h2 className="title">{title}</h2>
      <div className="rating">
        <p className="reviews">
          3.2 <span className="starts">&#9733; &#9733; &#9733;</span> &#9733; (
          {avaliacao})
        </p>
      </div>
      <div className="price">
        <span className="valor">{price}</span>
        {discount ? (
          <span className="discount"> % OFF no Pix</span>
        ) : (
          <span className="discount">0% OFF no Pix</span>
        )}
        <div>
          <span className="installments">Ou R$669 em </span>
          <span className="discount"></span>
        </div>
      </div>
      <div className="frete">
        <p>Frete grátis</p>
        <p>Chegará entre </p>
      </div>
      <div className="estoque">
        <p>Estoque disponível</p>
        <input type="text" value="" className="quantidade" />
        <p>unidade(s)</p>
      </div>
      <button className="comprar">Comprar</button>
      <div className="seguro">
        <input type="checkbox" value="" className="check" />
        <p>Adicione um seguro</p>
      </div>
      <div className="vendedor">
        <p>Vendido por</p>
        <p></p>
      </div>
    </div>
  )
}

const Product = ({ imagem, title, price, desconto, condiction, avaliacao }) => {
  return (
    <div className="layout">
      <div className="imagem">
        <img src={imagem} alt={title} />
      </div>
      <InfoProduct
        price={price}
        title={title}
        desconto={desconto}
        condiction={condiction}
        avaliacao={avaliacao}
      />
      <hr />
    </div>
  )
}

const App = () => {
  const [products, setProducts] = useState([])
  if (products.length === 0) {
    mlbFecth().then((data) => {
      setProducts(data)
    })
  }
  const betterProduct = products.length > 0 ? products[0] : null
  //  const src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
  return (
    <>
      {betterProduct && (
        <Product
          key={betterProduct.catalog_betterProduct_id}
          imagem={betterProduct.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
          title={betterProduct.title}
          price={formattCurency(betterProduct.price)}
          desconto={betterProduct.discounts}
          condiction={betterProduct.condition}
          avaliacao={betterProduct.available_quantity}
          rating="4.7"
          reviews="17000"
          frete="grátis"
          entrega="22 e 26 de abril"
          estoque="110"
          seguro="Luz oficial Mercado Livre"
          vendedor="MercadoLíder Platinum"
        />
      )}

      {products && (
        <div className="cards">
          {products.slice(0, 3).map((product) => (
            <CardAllProducts
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
            />
          ))}
        </div>
      )}
    </>
  )
}
export { App }
