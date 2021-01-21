import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F23333",
    },
  },
});

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid E-mail").required("Field can't be empty"),
  password: Yup.string()
    .required("Field can't be empty")
    .min(6, "Password must have at least 6 characters"),
  name: Yup.string()
    .required("Field can't be empty")
    .min(6, "Please enter your full name"),
  role: Yup.string().required("Field can't be empty"),
  age: Yup.string()
    .required("Field can't be empty")
    .matches(/(^[0-9]*$)/, "Please enter only numbers")
    .max(3, "Age must be at most 3 characters"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Field can't be empty"),
});

const SignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          age: "",
          role: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        validationSchema={LoginSchema}
        // onSubmit={submitFormTo}
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
                name="age"
                placeholder="Age"
                fullWidth={true}
                margin="normal"
                variant="outlined"
              />
              <Field
                component={TextField}
                name="role"
                placeholder="Role"
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
              <Field
                component={TextField}
                name="confirm_password"
                placeholder="Password Confirmation"
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
              </ThemeProvider>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
