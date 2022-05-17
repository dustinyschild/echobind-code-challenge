import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./card/card";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const CharacterName = styled.a`
  text-decoration: inherit;
  cursor: pointer;

  color: ${({ theme }) => theme.page.card.text};
  font-size: 36px;
  font-weight: bold;

  &::selection {
    color: ${({ theme }) => theme.page.card.highlightText};
    background: ${({ theme }) => theme.page.card.highlightBackground};
  }

  &:hover {
    color: ${({ theme }) => theme.page.card.highlightText};
  }
`;

const CharacterCard = ({ character }) => {
  return (
    <Card>
      <ContentWrapper>
        <CharacterName href={`/character/${character.id}`}>
          {character.name}
        </CharacterName>
      </ContentWrapper>
    </Card>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    origin: PropTypes.shape({}),
    location: PropTypes.shape({}),
    image: PropTypes.string.isRequired,
    episode: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired
  })
};

export default CharacterCard;
