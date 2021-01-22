import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Button } from "@material-ui/core";
import axios from "axios";
import { BlockSpace } from "./styled";
import { useHistory } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F23333",
    },
  },
});

const submitFormTo = (data) => {
  console.log(data);
  axios
    .post("https://tech-archive-project.herokuapp.com/user/create", data)
    .then((res) => {
      console.log(res);
    });
};

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid E-mail").required("Field can't be empty"),
  password: Yup.string()
    .required("Field can't be empty")
    .min(6, "Password must have at least 6 characters"),
  name: Yup.string()
    .required("Field can't be empty")
    .min(6, "Please enter your full name"),
  description: Yup.string().required("Field can't be empty"),
});

const SignUpForm = () => {
  const history = useHistory();

  const returnPage = () => {
    history.push("/");
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          description: "",
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={submitFormTo}
      >
        {(formik) => {
          return (
            <Form>
              <Field
                component={TextField}
                name="name"
                placeholder="Name"
                fullWidth={true}
                margin="normal"
                variant="outlined"
              />
              <Field
                component={TextField}
                name="description"
                placeholder="description"
                fullWidth={true}
                margin="normal"
                variant="outlined"
              />
              <Field
                component={TextField}
                name="email"
                placeholder="E-mail"
                fullWidth={true}
                margin="normal"
                variant="outlined"
              />
              <Field
                component={TextField}
                name="password"
                placeholder="Password"
                fullWidth={true}
                margin="normal"
                variant="outlined"
                type="password"
              />

              <br />
              <br />

              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={!formik.isValid}
                  size="large"
                  startIcon={<LockOpenIcon />}
                  type="submit"
                  fullWidth={true}
                >
                  Submit
                </Button>
                <BlockSpace />
                <Button
                  color="secondary"
                  variant="contained"
                  fullWidth={true}
                  onClick={() => returnPage()}
                >
                  Voltar
                </Button>
              </ThemeProvider>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
