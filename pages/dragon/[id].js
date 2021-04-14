import React from "react";
import PropTypes from "prop-types";

import Info from "components/pages/list/DragonsList/DragonCard/Info";
import DragonWrapper from "components/shared/DragonWrapper";
import Header from "components/shared/Header";

import { DragonContainer } from "components/pages/dragon/styles";

import { labels } from "components/pages/list/DragonsList/DragonCard/utils";
import api from "services/api";
import { FullContainer, Container } from "components/shared/CenteredContainers";

const Dragon = ({ dragon }) => {
  return (
    <FullContainer>
      <Header />
      <Container>
        <DragonWrapper>
          {Object.keys(labels).map((elem) => (
            <Info
              key={dragon.id + elem}
              id={dragon.id}
              value={dragon[elem]}
              field={elem}
              label={labels[elem]}
              isEditable={false}
              isValid={true}
            />
          ))}
        </DragonWrapper>
      </Container>
    </FullContainer>
  );
};

Dragon.propTypes = { dragon: PropTypes.object };

export const getServerSideProps = async ({ query }) => {
  const { data } = await api("getDragon", { id: query.id });

  return {
    props: {
      dragon: data,
    },
  };
};
export default Dragon;
