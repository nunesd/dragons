import React from "react";
import PropTypes from "prop-types";

import DragonCard from "./DragonCard";
import Text from "components/shared/Text";

const DragonsList = ({ dragons, removeDragon }) => (
  <>
    {dragons.map((dragon) => (
      <DragonCard key={dragon.id} dragon={dragon} removeDragon={removeDragon} />
    ))}
  </>
);

DragonsList.propTypes = {
  dragons: PropTypes.array,
  removeDragon: PropTypes.func,
};

export default DragonsList;
