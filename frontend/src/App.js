import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cadastre usuários</h1>
        <Nav variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/new">New</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <Routes />
    </div>
  );
}

export default App;
