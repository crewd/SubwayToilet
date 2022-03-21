import styled from 'styled-components';
import device from '../style/theme';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

  return (
    <NavWrapper>
      <NavUl>
        <NavList><NavLink to="/">홈</NavLink></NavList>
        <NavList><NavLink to="stationList">역 목록</NavLink></NavList>
        <NavList><NavLink to="/">메뉴3</NavLink></NavList>
        <NavList><NavLink to="/">메뉴4</NavLink></NavList>
      </NavUl>
    </NavWrapper >
  )
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 53px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, .3);
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
position: relative;
padding: 5px 10px;
::before{
  content: "";
  height: 5px;
  background-color: #aaa;
  position: absolute;
  bottom: 0;
  left: 0;
}
&:active::before, &:hover::before {
  width: 100%;
}
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

export default Header;