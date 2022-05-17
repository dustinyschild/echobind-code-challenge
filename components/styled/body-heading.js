import styled from "styled-components";

const BodyHeading = styled.div`
  height: 50px;

  text-align: center;
  font-size: 30px;
  font-weight: bold;

  color: ${({ theme }) => theme.page.body.text};
  &::selection {
    color: ${({ theme }) => theme.page.header.highlightText};
    background: ${({ theme }) => theme.page.header.highlightBackground};
  }
`;

export default BodyHeading;
