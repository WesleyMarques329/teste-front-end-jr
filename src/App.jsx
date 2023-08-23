import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import ProductsSlide from './components/ProductsSlide'
import Partners from './components/Partners'
import TextComponent from './components/TextComponent'
import Product from './components/Product'
import Footer from './components/Footer'
import Brands from './components/Brands'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Categories />
    <TextComponent />
    <ProductsSlide />
    <Partners />
    <TextComponent />
    <Product />
    <Brands />
    <Footer />
    </>
  )
}

export default App