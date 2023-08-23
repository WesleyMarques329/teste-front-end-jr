import { useState, useEffect } from 'react';
import '../styles/components/ProductsSlider.scss';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const ProductsSlide = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
        if (!response.ok) {
          throw new Error('Não foi possível obter os produtos.');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  const categories = [
    'Celular',
    'Acessórios',
    'Tablets',
    'Notebooks',
    'Tvs',
    'Ver todos',
  ];

  const prevProduct = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const nextProduct = () => {
    if (startIndex < products.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className='containerProducts'>
      <ul className='inlineMenu'>
        {categories.map((category, index) => (
          <li className='categories' key={index}>
            <a href={`category-${index}`}>{category}</a>
          </li>
        ))}
      </ul>

      <div className='productList'>
        <button onClick={prevProduct} className='slideButton'>
          <SlArrowLeft />
        </button>
        {products.slice(startIndex, startIndex + 4).map((product, index) => (
          <div className='cardProduct' key={index} onClick={() => handleProductClick(product)}>
            <img src={product.photo} alt={product.productName} className='imgProduct' />
            <h2 className='titleProduct'>{product.productName}</h2>
            <p className='oldPrice'>{(product.price * 1.2).toFixed(2)}</p>
            <p className='priceFixed'>R$ {(product.price * 1).toFixed(2)}</p>
            <p className='priceParcel'>ou 2x de R$ {(product.price / 10).toFixed(2)} sem juros</p>
            <p className='free-shipping'>Frete grátis</p>
            <div className="buttonContainer">
              <button className='btnProduct'>Comprar</button>
            </div>
          </div>
        ))}
        <button onClick={nextProduct} className='slideButton'>
          <SlArrowRight />
        </button>
      </div>

      {isModalOpen && selectedProduct && (
        <div className='modal'>
          <div className='modalContent'>
            <div>
              <img src={selectedProduct.photo} alt={selectedProduct.productName} className='modalImage' />
            </div>
            <div className='columnModal'>
              <h2 className='modalTitle'>{selectedProduct.productName}</h2>
              <p className='modalPrice'>Preço: R$ {(selectedProduct.price * 1).toFixed(2)}</p>
              <p className='modalDescription'>Many desktop publishing packages and web page editors now many desktop publishing</p>
              <a className='modalLink'>Veja mais detalhes do produto</a>
              <div className="quantityControl">
                <button className='btnQuantity' onClick={decreaseQuantity}><span className='btnMore'>-</span></button>
                <span>{quantity}</span>
                <button className='btnQuantity' onClick={increaseQuantity}><span>+</span></button>
              </div>
              <button className='modalCloseButton' onClick={closeModal}>Fechar</button>
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSlide;
