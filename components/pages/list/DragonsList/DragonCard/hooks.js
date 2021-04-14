import { useState } from "react";
import { DateTime } from "luxon";

import api from "services/api";

const initialState = {
  validations: { name: undefined, type: undefined, createdAt: undefined },
  values: { name: "", type: "", createdAt: "" },
};

export const useDragon = (id, initialValues) => {
  const initialStateValues = initialValues || initialState.values;
  const [validations, setValidations] = useState(initialState.validations);
  const [values, setValues] = useState(initialStateValues);

  const clearValidation = () => {
    setState(initialState);
  };

  const validateDragon = () => {
    const valuesIsValid = !!values.name && !!values.type && !!values.createdAt;

    setValidations({
      name: !!values.name,
      type: !!values.type,
      createdAt: !!values.createdAt,
    });

    if (valuesIsValid) {
      api(
        "updateDragon",
        { id },
        {
          ...values,
          createdAt: DateTime.fromFormat(values.createdAt, "dd/MM/yyyy")
            .toUTC()
            .toString(),
        }
      );
      setValidations(initialStateValues);
      setValidations(initialState.validations);
    }

    return valuesIsValid;
  };

  const deleteDragon = () => {
    api("deleteDragon", { id });
  };

  const changeValue = (field, value) => {
    setValues((state) => ({ ...state, [field]: value }));
  };

  return {
    clearValidation,
    validateDragon,
    deleteDragon,
    validations: validations,
    changeValue,
    values,
  };
};
