import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Pets() {
  return (
    <main className="mt-4 container">
      <h1>Pets</h1>
      <Button as={Link} to="/clientes/novo">
        Adicionar Cliente
      </Button>
      <hr />
    </main>
  );
}

export default Pets;
