import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const router = useRouter();

    const register = () => {
        //
    }

    const login = () => {

    }

    const loginRegisterForm = (buttonName) => (
        <div className="col-md-6">
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="form-control"
                />
                <small>We'll never share your email</small>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    className="form-control"
                />
            </div>

            <div>
                <button onClick={register} className="btn btn-primary">
                    {buttonName}
                </button>
            </div>
        </div>
    )

    return (
        <div className="container">
            <h2 className="text-center pt-4 display-4">Login / Register</h2>
            <div className="row"> {loginRegisterForm("Login")} {loginRegisterForm("Register")}</div>
        </div>
    )
}

export default Login;