import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 15px 10px;
  padding 0 10px;

  width: 400px;
  height: 220px;

  background-color: ${({ theme }) => theme.page.card.background};
  border-radius: 10px;

  text-align: center;
`;

export default CardWrapper;
