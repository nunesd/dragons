import React from "react";
import PropTypes from "prop-types";

import { StyledText, StyledDragonWrapper } from "./styles";

import { useRouter } from "next/router";

const DragonCard = ({ dragon }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/dragon/${dragon.id}`);
  };

  return (
    <StyledDragonWrapper onClick={handleClick}>
      <StyledText>
        <span>Nome: </span>
        {dragon.name}
      </StyledText>
      <StyledText>
        <span>Tipo: </span>
        {dragon.type}
      </StyledText>
      <StyledText>
        <span>Criado em: </span>
        {dragon.createdAt}
      </StyledText>
    </StyledDragonWrapper>
  );
};
DragonCard.propTypes = {
  dragon: PropTypes.object,
};

export default DragonCard;
