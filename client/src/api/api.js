const baseUrl = "http://localhost:8000";
const api = async (url, config) => {
  return await fetch(baseUrl + url, config).then((response) => response.json());
};

export default api;
