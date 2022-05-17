import { useContext, useEffect } from "react";
import Head from "next/head";
import { HeroText, HeroWrapper } from "../../components/styled/hero";
import { getCharacter } from "../../server/services/rick-and-morty-api";
import PropTypes from "prop-types";
import Page from "../../components/styled/page";
import Body from "../../components/styled/body";
import CharacterContent from "../../components/character-content";
import { getCharacterDescription } from "../../server/services/json-db";
import { CharacterProvider } from "../../context/character-context";

function Character({ character }) {
  return (
    <CharacterProvider initialCharacterState={character}>
      <Page>
        <Head>
          <title>{character.name}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeroWrapper>
          <HeroText>{character.name}</HeroText>
        </HeroWrapper>
        <Body>
          <CharacterContent {...character} />
        </Body>
      </Page>
    </CharacterProvider>
  );
}

export async function getServerSideProps({ params }) {
  //could promise.all
  const character = await getCharacter(params.id);
  const { description } = await getCharacterDescription(params.id);

  console.log({ description });

  character.description = description;

  return { props: { character } };
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
