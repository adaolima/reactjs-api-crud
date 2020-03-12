import React from "react";
import Helmet from "react-helmet";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import cpfMask from "../../utils/cpfMask";

let schema = yup.object({
  fullName: yup.string().required("Informe o seu nome!"),
  email: yup
    .string()
    .required("Informe o seu email!")
    .email("Informe um email válido"),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, {
      message: "CPF padrão. Números, pontos e traços."
    })
    .required("Informe o seu CPF padrão!"),
  birthDate: yup
    .date()
    .required("Informe sua data de nascimento!")
    .min(new Date(1900, 0, 1))
    .max(new Date(2020, 0, 1)),
  password: yup.string().required("Digite sua senha")
});

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Cadastrar Novo Usuário</title>
      </Helmet>
      <div className="row justify-content-center">
        <h2 className="my-4">Cadastrar Novo Usuário</h2>
      </div>
      <div className="row justify-content-center">
        <Formik
          validationSchema={schema}
          initialValues={{
            fullName: "",
            cpf: "",
            email: "",
            password: ""
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isSubmitting,
            setFieldValue,
            errors
          }) => (
            <Form className="col-lg-8" noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupName">
                <Form.Label className="sr-only">Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.fullName && !errors.fullName}
                  isInvalid={!!errors.fullName}
                  placeholder="Nome Completo"
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Nome Ok!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="sr-only">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  placeholder="Digite seu email"
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Email Ok!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupbirthDate">
                <Form.Label> Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  name="birthDate"
                  value={values.birthDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.birthDate && !errors.birthDate}
                  isInvalid={!!errors.birthDate}
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.birthDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Data Ok!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupCPF">
                <Form.Label className="sr-only">CPF</Form.Label>
                <Form.Control
                  type="text"
                  name="cpf"
                  value={values.cpf}
                  onChange={e => {
                    const value = e.target.value || "";
                    setFieldValue("cpf", cpfMask(value));
                  }}
                  onBlur={handleBlur}
                  isInvalid={!!errors.cpf}
                  isValid={touched.cpf && !errors.cpf}
                  placeholder="CPF"
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cpf}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Cpf Ok!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label className="sr-only">Senha</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  placeholder="Senha"
                  size="lg"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Senha Ok!</Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" disabled={isSubmitting}>
                Cadastrar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
