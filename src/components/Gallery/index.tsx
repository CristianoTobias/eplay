import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import zoon from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/fechar.png'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') {
      return item.url
    }
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') {
      return zoon
    }
    return play
  }
  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <div>
          <Items>
            {items.map((media, index) => (
              <Item
                key={media.url}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    type: media.type,
                    url: media.url
                  })
                }}
              >
                <img
                  src={getMediaCover(media)}
                  alt={`Mídia ${index + 1} do ${name}`}
                />
                <Action>
                  <img
                    src={getMediaIcon(media)}
                    alt="Clique para maximizar a midia"
                  />
                </Action>
              </Item>
            ))}
          </Items>
        </div>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent>
          <header>
            <h4>{name}</h4>
            <img
              src={close}
              alt="Icone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
