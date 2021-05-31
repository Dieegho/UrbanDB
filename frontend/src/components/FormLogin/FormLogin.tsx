import React, { useState, useRef } from 'react';
import { withRouter } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "./../../services/auth.services";

import { isEmail } from "validator";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          ¡Recuerda completar todos los campos!
        </div>
      );
    }
  };
  
const validemail = (value) => {
    if (!isEmail(value)) {
        return (
        <div className="alert alert-danger" role="alert">
            Correo inválido
        </div>
        );
    }
};

const MyFormLogin = ({history}) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
          AuthService.login(email, password).then(
            () => {
            history.push('/menu');
            },
            (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

            setLoading(false);
            setMessage(resMessage);
            }
        );
        } else {
        setLoading(false);
        }
    }

    return(
      <div>
        <Form onSubmit={handleSubmit} ref={form}>
            <div className="MyFormLogin">
              <label htmlFor="email">Correo Electrónico</label>
              <Input 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validations={[required, validemail]}
              />
            </div>

            <div className="MyFormLogin">
              <label htmlFor="password">Contraseña</label>  
              <Input 
                type="password" 
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validations={[required]}
                />
            </div>
            <div className="MyFormLogin">
              <button className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
              </button>
            </div>
            
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}

            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    )
}

export default withRouter(MyFormLogin);