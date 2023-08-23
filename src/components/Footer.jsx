import '../styles/components/Footer.scss';
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-inline'>
            <nav className='navbarFooter'>
                <ul className='footerLinks'>
                    <h2>Sobre nós</h2>
                    <li><a>Conheça</a></li>
                    <li><a>Como comprar</a></li>
                    <li><a>Indicação e desconto</a></li>
          <div className='icons'>
            <li><a><FaFacebookF /></a></li>
            <li><a><FaInstagram /></a></li>
            <li><a><FaYoutube /></a></li>
          </div>
        </ul>

        <ul className='footerLinks'>
          <h2>Informações Úteis</h2>
          <li><a>Fale conosco</a></li>
          <li><a>Dúvidas</a></li>
          <li><a>Prazos de entrega</a></li>
          <li><a>Forma de pagamento</a></li>
          <li><a>Política de privacidade</a></li>
          <li><a>Trocas e devoluções</a></li>
        </ul>

        <div>
          <h2>Formas de pagamento</h2>
          <img src='./src/assets/formas_pagamento.svg' alt='' />
        </div>
      </nav>

      
      <div className='footerNewsletter'>
        <h1 className='titleNewsletter'>Cadastre-se e Receba nossas <br /><strong>novidades e promoções</strong></h1>
        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
        <div>
          <input type='email' placeholder='Email' className='inputFooter' />
          <button className='btnFooter' type='submit'>Ok</button>
        </div>
      </div>
      </div>

      <div className='copyright'>
        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br></br>
        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
        </p>
        <span>
          <img src='./src/assets/group.svg' alt='' />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
