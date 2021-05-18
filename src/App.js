import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Counter from "./components/Counter";
import {Provider} from "react-redux";
import store from "./components/Reducer";


function App() {
    return (
        <div>
            <Provider store={store}>
                <Router>
                    <Link to={"/"}> home page</Link>
                    <br/>
                    <Link to={"/counter"}> go to counter</Link>
                    <hr/>
                    <Switch>
                        <Route exact path={"/"} render={(props) => <div>HOME SWEET HOME!!!</div>}/>
                        <Route exact path={"/counter"} component={Counter}/>
                    </Switch>
                </Router>
            </Provider>
        </div>
    )
        ;
}

export default App;
