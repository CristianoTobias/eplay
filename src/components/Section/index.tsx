import { Title, ProductsListContainer } from './styles'
export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <ProductsListContainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </ProductsListContainer>
)

export default Section
