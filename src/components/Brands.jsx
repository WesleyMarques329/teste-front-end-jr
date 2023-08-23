import '../styles/components/Brands.scss';
import { SlArrowRight } from 'react-icons/sl';

const brandData = [
  './src/assets/brand.svg',
  './src/assets/brand.svg',
  './src/assets/brand.svg',
  './src/assets/brand.svg',
  './src/assets/brand.svg',
];

const Brands = () => {
  return (
    <section className='brandsColumn'>
      <h1 className='titleBrands'>Navegue por marcas</h1>
      <div className='cardBrands'>
        {brandData.map((brandImgSrc, index) => (
          <div className='brand' style={{ position: 'relative' }} key={index}>
            <img src={brandImgSrc} alt='Marcas' />
            {index === 4 && (
              <span className='arrow' style={{ position: 'absolute', top: 80, left: 145 }}>
                <SlArrowRight />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
