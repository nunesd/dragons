import styled from "styled-components";
import Head from "next/head";
import PropTypes from "prop-types";

import { FullContainer } from "components/shared/CenteredContainers";
import Header from "components/shared/Header";

import api from "services/api";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = ({ dragons }) => {
  return (
    <FullContainer>
      <Head>
        <title>Dragões</title>
      </Head>
      <Header />
      <Title>My page</Title>
    </FullContainer>
  );
};

Home.propTypes = {
  dragons: PropTypes.array,
};

export const getServerSideProps = async () => {
  const data = await api("getDragons");

  return { props: { dragons: data } };
};

export default Home;
