// import { formattCurency } from "./utils/formattCurency"


import { Product } from "./components/product/Product.jsx"
import { Header } from "./components/header/Header.jsx"
import { CardAllProducts } from "./components/cardAllProducts/CardAllProducts"
import { Provider } from "./contexts/Provider.jsx"


const App = () => {
  
  
  // const betterProduct = products.length > 0 ? products[0] : null
  return (
    <>
    <Provider>
      <Header />
      <Product />
      <CardAllProducts />
    </Provider>
    </>
  )
}
export { App }
