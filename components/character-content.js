import Image from "next/image";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  min-height: 100px;
  min-width: 400px;
`;

const Button = styled.button`
  height: 28px;
  max-width: 70px;
`;

const getIdParam = (url) => {
  return url.split("/").at(-1);
};

const CharacterContent = ({
  id,
  image,
  name,
  status,
  species,
  type,
  origin,
  location,
  description
}) => {
  const [text, setText] = useState(description);

  const handleClick = () => {
    console.log("calling fetch");
    fetch("/api/characters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        text
      })
    });
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

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
            href={`/location/${getIdParam(origin.url)}`}
          >{`Origin: ${origin.name}`}</DetailItemLink>
          <Form onSubmit={(e) => e.preventDefault()}>
            <TextArea
              placeholder="Add a description..."
              value={text}
              onChange={handleChange}
            />
            <Button onClick={handleClick}>Save</Button>
          </Form>
        </CharacterDetails>
      </Column>
    </Container>
  );
};

CharacterContent.propTypes = {
  id: PropTypes.number.isRequired,
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
  }).isRequired,
  description: PropTypes.string
};

export default CharacterContent;
