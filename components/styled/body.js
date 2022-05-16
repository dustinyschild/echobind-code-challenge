import styled from "styled-components";

const Body = styled.div`
  flex: 1;

  background-color: ${({ theme }) => theme.page.body.background};
`;

export default Body;
