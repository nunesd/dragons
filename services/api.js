import { getParams } from "./utils";

const api = (type, body) => {
  const { url, ...params } = getParams(type);

  return fetch(url, {
    ...params,
    ...body,
  });
};

export default api;
