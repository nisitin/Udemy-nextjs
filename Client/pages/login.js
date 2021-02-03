import firebase from "../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import LoginRegisterForm from "../Components/LoginRegisterForm";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from "antd";
import { GoogleOutlined } from "@ant-design/icons"

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("sample@gmail.com");
    const [loginPass, setLoginPass] = useState("rrrrrrrr");
    const [RegisterEmail, setRegisterEmail] = useState("");
    const [RegisterPass, setRegisterPass] = useState("");
    const router = useRouter();


    const register = async () => {
        // console.log(registerEmail, registerPass);
        await firebase
            .auth()
            .createUserWithEmailAndPassword(RegisterEmail, RegisterPass)
            .then((user) => {
                console.log("REGISTER", user);
                router.push("/")
            })
            .catch((err) => {
                console.log(err);
                toast(err.message)
            });
    };

    const login = async () => {
        // console.log(loginEmail, loginPass);
        await firebase
            .auth()
            .signInWithEmailAndPassword(loginEmail, loginPass)
            .then((user) => {
                console.log("LOGIN", user);
            })
            .catch((err) => {
                console.log(err);
                toast(err.message)
            });
    };

    const googleLogin = async () => {
        await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((user) => {
                console.log("LOGIN", user);
            })
            .catch((err) => {
                console.log(err);
                toast(err.message);
            });
    };



    return (
        <div className="container">
            <h2 className="text-center pt-4 display-4">Login / Register</h2>
            <Button
                onClick={googleLogin}
                className="mb-3 col-md-6 offset-md-3"
                type="danger"
                shape="round"
                icon={<GoogleOutlined />}
                size="large"
                block
            >
                Login with Google
                      </Button>
            <div className="row">
                <LoginRegisterForm
                    loginEmail={loginEmail}
                    setEmail={setLoginEmail}
                    pass={loginPass}
                    setPass={setLoginPass}
                    handleSubmit={login}
                    buttonName="Login"
                />



                <LoginRegisterForm
                    loginPass={RegisterEmail}
                    setEmail={setRegisterEmail}
                    pass={RegisterPass}
                    setPass={setRegisterPass}
                    handleSubmit={register}
                    buttonName="Register"
                />
            </div>
        </div>
    )
}

export default Login;