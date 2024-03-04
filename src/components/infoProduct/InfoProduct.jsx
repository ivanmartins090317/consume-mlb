import { useState } from "react"

import "./infoProduct.css"

const InfoProduct = ({
  title,
  price,
  discount,
  condiction,
  avaliacao,
  installments,
}) => {
 
  const [memory, setMemory] = useState(null)

  return (
    <div className="info-description">
      <p>{title}</p>
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
          <span className="installments">Em</span>
          <span className=" discount">
            {" "}
            {installments.quantity}x R${installments.amount} sem juros
          </span>
          <span className="discount"></span>
        </div>
      </div>
      <div className="frete">
        <p className="mais-produtos">Ver meios de pagamento</p>
      </div>
      <div className="container-memory">
        <p className="memory">
          Memória interna:<span>{memory}</span>
        </p>
        <button onClick={(e) => setMemory(e.target.textContent)}>64 GB</button>
        <button onClick={(e) => setMemory(e.target.textContent)}>128 GB</button>
      </div>
      <button className="buy">Comprar</button>
      <button className="addCart">Adicionar ao carrinho</button>
    </div>
  )
}

export { InfoProduct }
