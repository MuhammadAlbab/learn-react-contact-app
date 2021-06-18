import axios from "axios";
const BASE_URL = "http://localhost:5000";

const getData = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

const addData = async (contact) => {
  await axios.post(`${BASE_URL}/contacts`, contact);
};

const deleteData = async (contact) => {
  await axios.delete(`${BASE_URL}/contacts/${contact}`);
};
export { getData, addData, deleteData };
