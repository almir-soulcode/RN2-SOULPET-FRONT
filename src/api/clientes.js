import axios from "axios";

export async function getClientes() {
  const response = await axios.get("http://localhost:3000/clientes");
  return response.data;
}

export async function getCliente(id) {
  const response = await axios.get(`http://localhost:3000/clientes/${id}`);
  return response.data;
}

export async function addCliente(data) {
  await axios.post("http://localhost:3000/clientes", data);
}

export async function updateCliente(id, data) {
  await axios.put(`http://localhost:3000/clientes/${id}`, data);
}

export async function deleteCliente(id) {
  await axios.delete(`http://localhost:3000/clientes/${id}`);
}
