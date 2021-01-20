import axios from 'axios'
export const TRUE = 'TRUE'
export const FALSE = 'FALSE'
export const LOGIN = "LOGIN";
export const LOGOUT = 'LOGOUT'

export const DoLogin = (token) => ({
  type: LOGIN,
  token,
});

export const setAuthenticationFalse = () => ({
  type: FALSE
});

export const setAuthenticationTrue = () => ({
  type: TRUE
});



export const requestLogin = (login, password) => (dispatch) => {
  axios.post("http://127.0.0.1:5000/login", { 'email': login, 'password': password })
    .then((res) => {
      dispatch(DoLogin(res.data.token))
      window.localStorage.setItem("Token", res.data.token)

      console.log('Logado!')
      console.log(res.data)

      dispatch(setAuthenticationTrue())
    })
    .catch((res) => {
      console.log(res)
      console.log('Erro de login')
      dispatch(setAuthenticationFalse())
    }
    )
};