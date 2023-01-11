import clienteAxios from "../../axios";

export default function apiCall(endPoint) {
	return clienteAxios
		.get(endPoint)
		.then((resp) => {
			if (resp.status !== 200) {
				throw { error: "error en la peticion" };
			}
			return resp.data.data;
		})
		.catch((err) => err);
}
