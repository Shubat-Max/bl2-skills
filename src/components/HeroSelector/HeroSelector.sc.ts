import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = styled.header`
  font-size: 400%;
  color: #ffde09;
  text-align: center;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 20px;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 20px;
  border: 2px solid #fff;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  text-decoration: none;
  transition: 0.24s;
  color: #fff;
  margin: 10px;

  &:hover {
    background: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const HeroName = styled.div`
  color: #ffde09;
  font-family: 'Homenaje', sans-serif;
  font-size: 300%;
  text-transform: uppercase;
  letter-spacing: 5px;
  transition: 0.24s;
  
  ${StyledLink}:hover & {
    color: #fff;
  }
`;

export const HeroClass = styled.div`
  color: #fff;
  font-size: 200%;
  text-transform: uppercase;
  font-family: 'Homenaje', sans-serif;
`;