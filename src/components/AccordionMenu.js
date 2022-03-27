import { useState } from "react"
import styled from "styled-components"

const AccordionMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AccordionContainer >
      <TitleWrapper onClick={() => setMenuOpen(!menuOpen)}>
        <p>title</p>
      </TitleWrapper>
      <AccordionInside menu={menuOpen}>
        <div>contents</div>
      </AccordionInside>
      <OpenButton onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '닫기' : '열기'}</OpenButton>
    </AccordionContainer >
  )
}

const AccordionContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #aaa;
  width: 80%;
`

const TitleWrapper = styled.div`
  cursor: pointer;
  padding: 20px;
  >p {
    font-size: 17px;
  }
`

const AccordionInside = styled.div`
  width: 100%;
  max-height: ${(props) => (props.menu ? '1000px' : 0)};
  overflow: hidden;
  >div {
    padding: 20px;
  }
`

const OpenButton = styled.button`
  position: absolute;
  top: 19px;
  right: 10px;
  border: none;
  background-color: initial;
  cursor: pointer;
`



export default AccordionMenu

