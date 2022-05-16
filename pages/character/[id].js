import Head from "next/head";
import { HeroText, HeroWrapper } from "../../components/styled/hero";
import { getCharacter } from "../../server/services/rick-and-morty-api";
import PropTypes from "prop-types";

function Character({ character }) {
  return (
    <>
      <Head>
        <title>{character.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroWrapper>
        <HeroText>{character.name}</HeroText>
      </HeroWrapper>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const character = await getCharacter(params.id);

  return { props: { character } };
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
