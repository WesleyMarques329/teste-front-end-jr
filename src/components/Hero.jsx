import backgroundImg from '../assets/background.png';
import '../styles/components/Hero.scss'



const Hero = () => {
  return (
    <section className='hero'>
      <div className='imageContainer'>
        <img src={backgroundImg} alt='Background' />
      </div>
      <div className='overlay'>
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% off nos produtos</h2>
        <button className='btnHero'>Ver produto</button>
      </div>
      
    </section>
  )
}

export default Hero