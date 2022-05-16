import styled from "styled-components";
import RickAndMortyIcon from "../rick-and-morty-icon";

const HeaderContainer = styled.nav`
  display: flex;
  height: 60px;
`;

const IconContainer = styled.a`
  color: #333333;
  background-color: transparent;
  border: none;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <RickAndMortyIcon
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
        />
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
