import Axios from 'axios';
const BASE_URL = 'https://to-do-react-server.herokuapp.com';
// const BASE_URL = 'http://localhost:8000';
const baseURL = `${BASE_URL}/api`;
export const AXIOS_INSTANCE = Axios.create({
	baseURL,
});
