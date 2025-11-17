import "./Home.css";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <div className="home">
      <h2 className="home-title">Página Inicial</h2>

      <Card title="Bem-vindo">
        Este é um template básico sem Tailwind, com CSS separado por componente.
      </Card>
    </div>
  );
}
