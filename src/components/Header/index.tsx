import { Link } from 'react-router-dom'
import HeaderBar, { Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo Eplay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <LinkCart href="#">
          0 - produto(s) <img src={carrinho} alt="Carrinho de compras" />
        </LinkCart>
      </HeaderBar>
    </>
  )
}

export default Header
