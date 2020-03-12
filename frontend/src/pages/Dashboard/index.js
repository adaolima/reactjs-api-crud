import React from "react";
import Helmet from "react-helmet";
import { Table } from "react-bootstrap";
import Paginate from "../../components/Paginate";
// import api from "../../services/api";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="mt-4">
        <h2 className="my-4">Lista de usuários cadastrados</h2>
        <Table striped bordered hover responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        <div className="py-4 d-flex justify-content-center">
          <Paginate />
        </div>
      </div>
    </>
  );
}
