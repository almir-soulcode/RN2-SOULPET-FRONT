import axios from "axios";

export async function getPets() {
  const response = await axios.get("http://localhost:3000/pets");
  return response.data;
}

export async function getPet(id) {
  const response = await axios.get(`http://localhost:3000/pets/${id}`);
  return response.data;
}

export async function addPet(data) {
  await axios.post("http://localhost:3000/pets", data);
}

export async function updatePet(id, data) {
  await axios.put(`http://localhost:3000/pets/${id}`, data);
}

export async function deletePet(id) {
  await axios.delete(`http://localhost:3000/pets/${id}`);
}
