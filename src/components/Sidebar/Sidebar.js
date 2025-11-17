import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-list">
          <li className="sidebar-item">Home</li>
          <li className="sidebar-item">Dashboard</li>
          <li className="sidebar-item">Configurações</li>
        </ul>
      </nav>
    </aside>
  );
}
