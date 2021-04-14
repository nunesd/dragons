import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

import Info from "./Info";
import DragonWrapper from "components/shared/DragonWrapper";
import IconList from "./IconList";
import ActionButtons from "./ActionButtons";

import { labels } from "./utils";
import { useDragon } from "./hooks";
import axios from "axios";

const DragonCard = ({ dragon, removeDragon }) => {
  const router = useRouter();
  const {
    validations,
    values,
    deleteDragon,
    validateDragon,
    changeValue,
  } = useDragon(dragon.id, {
    ...dragon,
  });
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    if (window) {
      window.axios = axios;
    }
  }, []);

  const handleIconsClick = (type) => {
    if (type === "view") {
      router.push(`/dragon/${dragon.id}`);
    }

    if (type === "edit") {
      setCanEdit(true);
    }

    if (type === "delete") {
      deleteDragon();
      removeDragon(dragon.id);
    }
  };

  const handleButtonsClick = (type) => {
    if (type === "cancel") {
      setCanEdit(false);
    }

    if (type === "save") {
      if (validateDragon()) {
        setCanEdit(false);
      }
    }
  };

  return (
    <DragonWrapper>
      {Object.keys(labels).map((elem) => (
        <Info
          key={elem}
          id={dragon.id}
          value={values[elem]}
          field={elem}
          label={labels[elem]}
          onChange={changeValue}
          isEditable={canEdit}
          isValid={validations[elem]}
        />
      ))}
      {canEdit ? (
        <ActionButtons onClick={handleButtonsClick} />
      ) : (
        <IconList onClick={handleIconsClick} />
      )}
    </DragonWrapper>
  );
};

DragonCard.propTypes = {
  dragon: PropTypes.object,
  removeDragon: PropTypes.func,
};

export default DragonCard;
