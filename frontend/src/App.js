import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./assets/logo-white.svg";
import Routes from "./routes";
import styled from "styled-components";
import Helmet from "react-helmet";

const Header = styled.header`
  font-weight: normal;
  height: 70px;
  .navbar .navbar-nav a.nav-link {
    color: white;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const AppTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: white;
  margin-bottom: 0;
  opacity: 0.7;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function App() {
  return (
    <div className="App" style={{ fontFamily: ["Montserrat", "sans-serif"] }}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header className="App-header">
        <Navbar bg="primary" variant="dark" fixed="top" expand="lg">
          <Navbar.Brand href="/" title="Gazeta do Povo">
            <img
              src={logo}
              alt="Gazeta do Povo"
              style={{ maxWidth: 200, width: "200%" }}
            />
          </Navbar.Brand>
          <AppTitle>Cadastre usuários</AppTitle>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/register">Cadastrar</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Header>
      <Container>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
