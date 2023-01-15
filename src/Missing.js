import { Link } from "react-router-dom";
import monke from './monke.gif'

const Missing = () => {
    return (
        <main className="missing">
            <h2>Page not found</h2>
            <p>Well, that fucking sucks.</p>
            <p>
                <Link to="/">Get the fuck out to the homepage.</Link>
            </p>
            <img alt="monke" src={monke} style={{ height: "25rem" }} />
        </main>
    )
};

export default Missing;
