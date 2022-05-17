import PropTypes from "prop-types";
import CardWrapper from "./wrapper";

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
