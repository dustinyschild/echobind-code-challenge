import styled from "styled-components";

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.page.body.background};

  padding-top: 30px;
  padding-left: 100px;
  padding-right: 100px;
`;

export default Body;
