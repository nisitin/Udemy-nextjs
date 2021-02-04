import { Context } from "../context";
import { useContext } from "react";

const Home = () => {
    const { state } = useContext(Context)
    return (
        <div className="container">
            <h2>Home page</h2>
            <p className="lead">This page is fro public it. If you login, you see your details here</p>
            <pre>{JSON.stringify(state, null, 4)}</pre>
        </div>
    )
}

export default Home;