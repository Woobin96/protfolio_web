import { STRINGS } from "../Contents/String";
import '../Contents/Style.css';

function Home() {
    return (
        <div>
            <h1 className="App">
                {STRINGS.HEADER_TITLE}
            </h1>
        </div>
    );
}

export default Home;
