import {Link, Route, Switch} from "react-router-dom";
import ItemInventoryDescription from "../itemInventoryDescription/ItemInventoryDescription";

export default function ItemInventory({item, url}) {
    let {title, id} = item;
    console.log(item)
    return (
        <div>
            Title of item: {title}
            <Link to={url + '/' + id}>Show description</Link>
            <Switch>
                <Route path={url + '/:id'} render={() => <h2>HELLO</h2>}/>
                {/*<Route path={"/inventory/:id"} render={()=>{*/}
                {/*    <h1>HEllooo</h1>*/}
                {/*    // <ItemInventoryDescription itemInfo={item} />*/}
                {/*}*/}
                {/*}/>*/}
            </Switch>
        </div>
    )
}