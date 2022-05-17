import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 15px 10px;

  width: 450px;
  height: 220px;

  background-color: ${({ theme }) => theme.page.card.background};
  border-radius: 10px;
`;

export default CardWrapper;
