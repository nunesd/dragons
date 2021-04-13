import React from "react";
import PropTypes from "prop-types";

import DragonCard from "./DragonCard";
import Text from "components/shared/Text";

const DragonsList = ({ dragons }) => {
  console.log(`dragons`, dragons);
  return (
    <>
      {dragons.map((dragon) => (
        <DragonCard key={dragon.id} dragon={dragon} />
      ))}
    </>
  );
};

DragonsList.propTypes = {
  dragons: PropTypes.array,
};

export default DragonsList;
