import { Image, Precos, Title } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { formataPreço } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])
  if (!game) {
    return <h3>Esta carregando...</h3>
  }
  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Precos>
            <span>De {formataPreço(game?.prices.old)}</span> <br />
            por apenas {formataPreço(game?.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game?.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
