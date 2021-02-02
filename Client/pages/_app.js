import 'bootstrap/dist/css/bootstrap.css'
import Nav from "../Components/Nav";
import { Provider } from "../context"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirebaseAuthState from "../Components/FirebaseAuthState";
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <FirebaseAuthState>
                <Nav />
                <ToastContainer />
                <Component {...pageProps} />
            </FirebaseAuthState>
        </Provider>
    )
}