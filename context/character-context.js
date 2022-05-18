import React, { useState } from "react";
import PropTypes from "prop-types";

export const CharacterContext = React.createContext();

export const CharacterProvider = ({ children, initialCharacterState }) => {
  const [character, setCharacter] = useState(initialCharacterState);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

CharacterProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialCharacterState: PropTypes.shape({
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
  }).isRequired
};

export default CharacterContext;
