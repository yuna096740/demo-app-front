const devUrl = "http://127.0.0.1:8000/";
const prodUrl = "";

export const endpoint = (url) => {
  return devUrl + url;
};
