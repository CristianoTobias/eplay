import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  width: 100%;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  margin-right: 16px;
  position: relative;
  > img {
    border: 2px solid ${cores.branca};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease, visibility 0.5s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
  }
`

export const ModalContent = styled.div`
  max-width: 80%;
  max-height: 80%;
  background: white;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background: #333;
    color: #fff;

    h4 {
      margin: 0;
      font-size: 18px;
      font-weight: bold;
    }
    img {
      cursor: pointer;
      width: 24px; /* Tamanho ajustável */
      height: 24px; /* Tamanho ajustável */
      filter: invert(1); /* Inverte as cores para branco */
    }
  }

  > img,
  iframe {
    max-width: 100%;
    max-height: calc(100% - 64px); /* Subtracting header height */
    display: block;
    width: auto;
    height: auto;
    object-fit: cover;
  }

  > iframe {
    border: none;
    height: 800px;
  }
`
