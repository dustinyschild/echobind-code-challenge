import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./card/card";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const LocationName = styled.a`
  text-decoration: inherit;
  cursor: pointer;

  color: ${({ theme }) => theme.page.card.text};
  font-size: 30px;
  font-weight: bold;

  &::selection {
    color: ${({ theme }) => theme.page.card.highlightText};
    background: ${({ theme }) => theme.page.card.highlightBackground};
  }

  &:hover {
    color: ${({ theme }) => theme.page.card.highlightText};
  }
`;

const LocationCard = ({ location }) => {
  return (
    <Card>
      <ContentWrapper>
        <LocationName href={`/location/${location.id}`}>
          {location.name}
        </LocationName>
      </ContentWrapper>
    </Card>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    dimension: PropTypes.string.isRequired,
    residents: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired
  })
};

export default LocationCard;
