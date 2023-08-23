import logoImg from "../assets/vtex.png"
import '../styles/components/Navbar.scss'

// icons
import { BsSearch, BsHeart, BsCart3, BsBoxSeam } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiTruckLight, PiCreditCardLight, PiCrownSimpleThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <section className='mainNavbar'>
      <div className='barPromotion'>
        <div className='inlineText'>
          <AiOutlineSafetyCertificate />
          <p>Compra <span className="text-color">100% segura</span></p>
        </div>
        <div className='inlineText'>
          <PiTruckLight />
          <p><span className="text-color">Frete grátis</span> acima de R$ 200</p>
        </div>
        <div className='inlineText'>
          <PiCreditCardLight />
          <p><span className="text-color">Parcele</span> suas compras</p>
        </div>
      </div>



    <nav className='navbar'>
      <img src={logoImg} />
      <div className='containerInput'>
        <input placeholder="Oque você está buscando?" />
        <BsSearch style={ {margin: '16px'} }/>
      </div>
      <div className='icons'>
        <BsBoxSeam />
        <BsHeart />
        <VscAccount />
        <BsCart3 />
      </div>
    </nav>

    <nav className='subNavbar'>
      <ul>
        <li><a>Todas categorias</a></li>
        <li><a>Supermercado</a></li>
        <li><a>Livros</a></li>
        <li><a>Moda</a></li>
        <li><a>Lançamentos</a></li>
        <li><a className="text-color">Ofertas do dia</a></li>
        <li><a className='iconLink'><PiCrownSimpleThin />Assinatura</a></li>
      </ul>
    </nav>

    </section>
  )
}

export default Navbar