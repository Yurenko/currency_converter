import data from "../currency.json";

const elementCurrentValue = (value: string): string => {
  const findValue = Object.entries(data).find(
    (el) => el[0] === value.toLowerCase()
  ) as Array<string>;
  return findValue[1];
};

export default elementCurrentValue;
