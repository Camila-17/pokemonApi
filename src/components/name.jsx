import React, { useEffect, useState } from "react";

export const Name = () => {
    const [name, setName] = useState([]);

    async function getName() {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        const name = await data.json();

        setName(name);
    }
    useEffect(() => {
        getName()
    })

    return(
        <div>
            {
                name.map(item => (
                    <h2 src={item.url} alt=""/>

                ))
            }
        </div>
    )
}

export default Name