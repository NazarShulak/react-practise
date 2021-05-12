import {useEffect, useState} from "react";
import axiosInstance from "../../services/Api";
import ItemInventory from "../itemInventory/ItemInventory";

export default function Inventory({item: {match: {url}}}) {
    console.log(url);
    let [inventoryItem, setInventoryItem] = useState([]);

    useEffect(() => {
        axiosInstance.get('/inventory').then(value => setInventoryItem([...value.data]))
    }, [])

    return (
        <div>
            {
                inventoryItem.map(value => <ItemInventory key={value.id} item={value} url={url}/> )
            }

        </div>
    )
}