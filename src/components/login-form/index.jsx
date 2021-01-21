import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Button } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { requestLogin } from '../../redux/actions/index'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F23333",
    },
  },
});



const LoginSchema = Yup.object({
  login: Yup.string().email("Invalid E-mail").required("Field can't be empty"),
  password: Yup.string().required("Field can't be empty"),
});





const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()



  const submitFormTo = ({ login, password }) => {
    dispatch(requestLogin(login, password))
    history.push('/')
  };


  return (
    <>
      <Formik
        initialValues={{
          login: "",
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
                name="login"
                placeholder="E-mail"
                fullWidth={true}
                margin="normal"
                variant="outlined"
              />
              <Field
                component={TextField}
                name="password"
                placeholder="password"
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

export default LoginForm;
