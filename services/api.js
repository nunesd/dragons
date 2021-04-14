import axios from "axios";
import { getParams } from "./utils";

const api = (type, parameters, body) => {
  const { url, ...params } = getParams(type, parameters);

  const data = body || {};

  return axios({ url, ...params, data });
};

export default api;
