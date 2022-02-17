import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.exchangerate.host/",
});

export const convertCurentlyAPI = (from = 0, to = 0, amount = 1) => {
  return instance
    .get(`convert?from=${from}&to=${to}&amount=${amount}`)
    .then((res) => res.data);
};

export const latestEndpointAPI = (date = "", value) => {
  return instance.get(`${date}?base=${value}`).then((res) => res.data);
};
