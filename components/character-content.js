import Image from "next/image";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const CharacterDetails = styled.div`
  margin-left: 20%;
`;

const DetailItem = styled.div`
  font-weight: bold;
  text-align: left;

  color: ${({ theme }) => theme.page.body.text};

  &::selection {
    color: ${({ theme }) => theme.page.body.highlightText};
    background: ${({ theme }) => theme.page.body.highlightBackground};
  }
`;

const DetailItemLink = styled.a`
  text-decoration: inherit;
  cursor: pointer;
  display: block;

  color: ${({ theme }) => theme.page.card.text};
  font-size: 28px;
  font-weight: bold;

  &::selection {
    color: ${({ theme }) => theme.page.card.highlightText};
    background: ${({ theme }) => theme.page.card.highlightBackground};
  }

  &:hover {
    color: ${({ theme }) => theme.page.card.highlightText};
  }
`;

const DetailItemLarge = styled(DetailItem)`
  font-size: 36px;
`;

const DetailItemMedium = styled(DetailItem)`
  font-size: 28px;
`;

const getIdParam = (url) => {
  return url.split("/").at(-1);
};

const CharacterContent = ({
  image,
  name,
  status,
  species,
  type,
  origin,
  location
}) => {
  return (
    <Container>
      <Column style={{ maxWidth: "300px" }}>
        <Image
          src={image}
          alt={name}
          layout="fixed"
          height={400}
          width={400}
          priority
        />
      </Column>
      <Column>
        <CharacterDetails>
          <DetailItemLarge>{`Status: ${status}`}</DetailItemLarge>
          <DetailItemMedium>{`Species: ${species}`}</DetailItemMedium>
          <DetailItemMedium>{`Subspecies: ${type || "none"}`}</DetailItemMedium>
          <DetailItemLink
            href={`/location/${getIdParam(location.url)}`}
          >{`Location: ${location.name}`}</DetailItemLink>
          <DetailItemLink
            href={`/location/${getIdParam(location.url)}`}
          >{`Origin: ${origin.name}`}</DetailItemLink>
          <DetailItemMedium>{`Status: ${status}`}</DetailItemMedium>
        </CharacterDetails>
      </Column>
    </Container>
  );
};

CharacterContent.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default CharacterContent;
