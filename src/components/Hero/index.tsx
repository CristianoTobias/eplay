import { Game } from '../../pages/Home'
import Button from '../Button'
import { formataPreço } from '../ProductsList'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
type Props = {
  game: Game
}
const Hero = ({ game }: Props) => (
  <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <Infos>
        <h2>{game.name}</h2>
        <p>
          {game.prices.discount && (
            <span>De {formataPreço(game.prices.old)}</span>
          )}
          {game.prices.current && <>Por {formataPreço(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar esse item ao carrinho"
            variant="primary"
          >
            Acidionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
