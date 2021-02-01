import 'bootstrap/dist/css/bootstrap.css'
import Nav from "../Components/Nav";
import { Provider } from "../context"

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <Nav />
            <Component {...pageProps} />
        </Provider>
    )
}