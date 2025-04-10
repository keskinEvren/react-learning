import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
} 

function Header() {
  return (
    <header>
      <h1>My Header</h1>
    </header>
  )
}

function ProductList() {
  return (
    <div>
      <h2>Product List</h2>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

function Product() {
  return <h3>Product</h3>;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
