import styled from 'styled-components';
import device from '../style/theme';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <NavWrapper>
      <NavUl>
        <NavList><NavLink to="/">홈</NavLink></NavList>
        <NavList><NavLink to="stationList">역 목록</NavLink></NavList>
        <NavList>메뉴3</NavList>
        <NavList>메뉴4</NavList>
      </NavUl>
    </NavWrapper>
  )
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 80%;

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.laptop} {
    width: 50%;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`

const NavList = styled.li`
  line-height: 48px;
  font-weight: bold;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default Header;