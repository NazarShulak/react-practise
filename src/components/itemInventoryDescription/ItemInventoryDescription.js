import {useEffect, useState} from "react";

export default function ItemInventoryDescription({category,description,slogan,price,stock}) {
    const [inventories, setInventories] = useState([]);

    const fetchDataUnventories = async () => {
        const resp = await fetch('https://api.sampleapis.com/futurama/inventory'+);
        const json = await resp.json();
        console.log(json);
    }

    useEffect(() => {
        fetchDataUnventories()
    }, [])

    return (
        <div>
            {/*{category}-{description}-{slogan}-{price}-{stock}*/}
            ItemInventoryDescription
        </div>
    )
}