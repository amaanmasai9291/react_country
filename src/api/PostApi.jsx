import axios from "axios";

const api = axios.create({ baseURL: "https://restcountries.com/v3.1" });

//HTTP GET METHOD
export const getCountryData = () => {
  return api.get("all?fields=name,population,region,capital,flags");
};

export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true,population,region,capital,tld,currencies,languages,borders,flags`
  );
};
