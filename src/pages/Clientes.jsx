import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Clientes() {
  return (
    <main className="mt-4 container">
      <h1>Clientes</h1>
      <Button as={Link} to="/clientes/novo">
        Adicionar Cliente
      </Button>
      <hr />
    </main>
  );
}

export default Clientes;
