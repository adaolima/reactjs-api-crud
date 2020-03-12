import React from "react";
import { Helmet } from "react-helmet";
import { Form, Button, Card } from "react-bootstrap";

// import { Container } from './styles';

export default function Login() {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login da applicação" />
      </Helmet>
      <div className="row justify-content-center pt-4">
        <div className="col-lg-5 mt-4">
          <Card>
            <Card.Header className="d-flex justify-content-center align-item-center">
              <h2 className="mb-0">Entrar na Conta</h2>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Digite seu email"
                    size="lg"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Senha" size="lg" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100 mt-4 text-uppercase"
                >
                  Entrar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
