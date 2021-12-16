import { Link } from "react-router-dom";

export function NoMatch() {
    return (
      <div>
        <h1>Página no encontrada</h1>
        <p>
          <Link to="/"><button type="button" class="btn btn-dark">Dark</button></Link>
        </p>
      </div>
    );
}