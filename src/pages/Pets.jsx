import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { deletePet, getPets } from "../api/pets";

function Pets() {
  const [pets, setPets] = useState(null);

  function carregarDados() {
    getPets().then((resultados) => {
      setPets(resultados);
    });
  }

  function deletarPet(id) {
    const deletar = confirm("Tem certeza?");
    if (deletar) {
      deletePet(id).then(() => {
        carregarDados();
        toast.success("Pet removido.");
      });
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Pets</h1>
      <Button as={Link} to="/pets/novo">
        Adicionar Pet
      </Button>
      <hr />
      {pets ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Porte</th>
              <th>Data Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => {
              return (
                <tr key={pet.id}>
                  <td>{pet.nome}</td>
                  <td>{pet.tipo}</td>
                  <td>{pet.porte}</td>
                  <td>
                    {pet.dataNasc? new Date(pet.dataNasc + "T00:00:00").toLocaleDateString() : "Sem data"}
                  </td>
                  <td className="d-flex gap-2">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deletarPet(pet.id)}
                    >
                      Excluir
                    </Button>
                    <Button size="sm" as={Link} to={`/pets/editar/${pet.id}`}>
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Pets;
