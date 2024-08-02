import { useEffect } from "react";
import { useState } from "react";
import { deleteCliente, getClientes } from "../api/clientes";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Clientes() {
  const [clientes, setClientes] = useState(null);

  function carregarDados() {
    getClientes().then((resultados) => {
      setClientes(resultados);
    });
  }

  function deletarCliente(id) {
    const deletar = confirm("Tem certeza?");
    if (deletar) {
      deleteCliente(id).then(() => {
        toast.success("Cliente removido.");
        carregarDados();
      });
    }
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Clientes</h1>
      <Button as={Link} to="/clientes/novo">
        Adicionar Cliente
      </Button>
      <hr />
      {clientes ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => {
              return (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td className="d-flex gap-2">
                    <Button variant="danger" size="sm" onClick={() => deletarCliente(cliente.id)}>
                      Excluir
                    </Button>
                    <Button
                      size="sm"
                      as={Link}
                      to={`/clientes/editar/${cliente.id}`}
                    >
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

export default Clientes;
