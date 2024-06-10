import { Game } from '../../pages/Home'
import Product from '../Product'
import { List, ProductsListContainer, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
export const formataPreço = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ title, background, games }: Props) => {
  const getGamesTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formataPreço(game.prices.current))
    }
    return tags
  }
  return (
    <ProductsListContainer background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGamesTags(game)}
                system={game.details.system}
              />
            </li>
          ))}
        </List>
      </div>
    </ProductsListContainer>
  )
}

export default ProductList
