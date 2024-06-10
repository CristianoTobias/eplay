import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  height: 480px;
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 16px;
  ${TagContainer} {
    margin-right: 8px;
  }
  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    content: '';
    opacity: 0.56;
  }
  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;
  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin: 16px 0;
    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
