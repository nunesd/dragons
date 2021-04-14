import styled from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";
import { DateTime } from "luxon";

import DragonsList from "components/pages/list/DragonsList";
import { ListContainer } from "components/pages/list/styles";
import { FullContainer } from "components/shared/CenteredContainers";
import Header from "components/shared/Header";

import api from "services/api";
import { useState } from "react";

const Home = ({ initialDragons }) => {
  const [dragons, setDragons] = useState(initialDragons);

  const removeDragon = (id) => {
    setDragons(dragons.filter((dragon) => dragon.id !== id));
  };

  return (
    <FullContainer>
      <Head>
        <title>Dragões</title>
      </Head>
      <Header />
      <ListContainer>
        <DragonsList dragons={dragons} removeDragon={removeDragon} />
      </ListContainer>
    </FullContainer>
  );
};

Home.propTypes = {
  dragons: PropTypes.array,
};

export const getServerSideProps = async () => {
  const { data } = await api("getDragons");

  const filteredDragons = data.map((dragon) => ({
    ...dragon,
    createdAt: DateTime.fromISO(dragon.createdAt).toFormat("dd/MM/yyyy"),
  }));

  const sortedDragons = filteredDragons.sort((a, b) => {
    const dragonAName = a.name.toLowerCase();
    const dragonBName = b.name.toLowerCase();

    if (dragonAName > dragonBName) {
      return 1;
    }
    if (dragonAName < dragonBName) {
      return -1;
    }
    return 0;
  });

  return { props: { initialDragons: sortedDragons } };
};

export default Home;
