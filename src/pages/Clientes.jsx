import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getClientes } from "../api/clientes";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function Clientes() {
  const [clientes, setClientes] = useState(null);

  function carregarClientes() {
    getClientes().then((dados) => {
      setClientes(dados);
    });
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Clientes</h1>
      <Button as={Link} to="/clientes/novo">
        Adicionar Cliente
      </Button>
      <hr />
      {clientes ? (
        <Table>
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
                  <td>
                    <Button variant="danger" size="sm">Excluir</Button>
                    <Button size="sm">Editar</Button>
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
