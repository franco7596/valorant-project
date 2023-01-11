import axios from "axios";

const clienteAxios = axios.create({
	baseURL: "https://valorant-api.com/v1/",
});

export default clienteAxios;
