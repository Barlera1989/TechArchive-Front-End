import React from "react";
import { FormsDiv } from "../../styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F23333",
    },
  },
});

const LoginSchema = Yup.object({
  title: Yup.string()
    .required("Field can't be empty")
    .min(10, "Field must have at least 10 characters"),
  subtitle: Yup.string()
    .required("Field can't be empty")
    .min(8, "Field must have at least 8 characters"),
  news: Yup.string()
    .required("Field can't be empty")
    .min(240, "Field must have at least 240 characters"),
});

const NewsForm = () => {
  const history = useHistory();

  const returnPage = () => {
    history.push("/");
  };

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          subtitle: "",
          category: "",
        }}
        validationSchema={LoginSchema}
        // onSubmit={submitFormTo}
      >
        {(formik) => {
          return (
            <Form>
              <FormsDiv>
                <Field
                  component={TextField}
                  name="title"
                  placeholder="Title"
                  fullWidth={true}
                  margin="normal"
                  variant="outlined"
                  style={{ marginRight: 30, marginLeft: 30 }}
                />
                <Field
                  component={TextField}
                  name="subtitle"
                  placeholder="Subtitle"
                  fullWidth={true}
                  margin="normal"
                  variant="outlined"
                  style={{ marginRight: 30 }}
                />
                <Field
                  component={TextField}
                  name="category"
                  placeholder="Category"
                  fullWidth={true}
                  margin="normal"
                  variant="outlined"
                  // style={{ marginRight: 30 }}
                />
              </FormsDiv>
              <FormsDiv>
                <Field
                  component={TextField}
                  name="news"
                  placeholder="type here..."
                  fullWidth={true}
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={20}
                  style={{ marginLeft: 30 }}
                />
              </FormsDiv>
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
                  style={{ marginLeft: 30 }}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  disabled={!formik.isValid}
                  size="large"
                  type="submit"
                  style={{ marginLeft: 30 }}
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

export default NewsForm;
