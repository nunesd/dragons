export const getParams = (type) => {
  switch (type) {
    case "login":
      return {
        url: "login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };

    default:
      break;
  }
};
