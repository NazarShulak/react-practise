import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Inventory from "./components/inventory/Inventory";

function App() {
    return (
        <Router>
            <div>
                <br/>
                <Link to={"/inventory"}>Show all inventory</Link>
                <hr/>
                <Switch>

                    <Route exact={true} path={"/inventory"}
                           render={(props) => {
                        return <Inventory item={props}/>
                    }}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
