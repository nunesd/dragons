export const getParams = (type, params) => {
  const baseURL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1";
  const headers = { "Content-Type": "application/json" };

  switch (type) {
    case "getDragons":
      return {
        url: `${baseURL}/dragon`,
        method: "GET",
        headers,
      };
    case "updateDragon":
      return {
        url: `${baseURL}/dragon/${params.id}`,
        method: "PUT",
        headers,
      };
    case "createDragon":
      return {
        url: `${baseURL}/dragon`,
        method: "POST",
        headers,
      };
    case "deleteDragon":
      return {
        url: `${baseURL}/dragon/${params.id}`,
        method: "DELETE",
        headers,
      };

    default:
      return {
        url: "",
        method: "",
        headers,
      };
  }
};
