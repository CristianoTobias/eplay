import {
  ContainerFooter,
  Links,
  Link,
  SectionFooter,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <ContainerFooter>
    <div className="container">
      <SectionFooter>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link href="#">RPG</Link>
          </li>
          <li>
            <Link href="#">Ação</Link>
          </li>
          <li>
            <Link href="#">Aventura</Link>
          </li>
          <li>
            <Link href="#">Esportes</Link>
          </li>
          <li>
            <Link href="#">Simulação</Link>
          </li>
          <li>
            <Link href="#">Estratégia</Link>
          </li>
          <li>
            <Link href="#">FPS</Link>
          </li>
        </Links>
      </SectionFooter>
      <SectionFooter>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link href="#">Novidades</Link>
          </li>
          <li>
            <Link href="#">Promoções</Link>
          </li>
          <li>
            <Link href="#">Em breve</Link>
          </li>
        </Links>
      </SectionFooter>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </ContainerFooter>
)

export default Footer
