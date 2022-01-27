import React, { useEffect, useState } from 'react';


export const BringPokemon = () => {

    const [writePoke, setWritePoke] = useState([]);
    const [showPoke, setShowPoke] = useState();

    useEffect(() => {
        // fetch('https://pokeapi.co/api/v2/pokemon')
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200')
            .then(response => response.json())
            .then(response => setWritePoke(response.results))
    }, []);

    const handleOnClick = () => {
            setShowPoke(
            <ol>
                {writePoke.length > 0 && writePoke.map((pokeName, index) => {
                    return (<li key = { index }>{pokeName.name}</li>)}
                )}
            </ol>
            )
    }

    return (

        <div style={{ width: 500 }}>

            <button onClick={handleOnClick} type="button" className="btn btn-secondary">Fetch Pokemon</button>
            {showPoke}

        </div>);
};


