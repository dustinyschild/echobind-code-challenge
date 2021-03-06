import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 365px;
  margin: 0;
`;

export const HeroText = styled.h1`
  font-size: 3.75rem;
  text-align: center;
  color: ${({ theme }) => theme.page.header.text};
  &::selection {
    color: ${({ theme }) => theme.page.header.highlightText};
    background: ${({ theme }) => theme.page.header.highlightBackground};
  }
`;

export const HeroSubText = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: ${({ theme }) => theme.page.header.text};
  &::selection {
    color: ${({ theme }) => theme.page.header.highlightText};
    background: ${({ theme }) => theme.page.header.highlightBackground};
  }
`;
