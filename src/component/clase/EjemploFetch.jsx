import { useState,useEffect } from "react"
import React from "react"

export const EjemploFetch = () => {

    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
        const getPokemons = ()=>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit=11')
            .then(res => res.json())
            .then(data => setPokemon(data.results))
            }
        getPokemons()
    },[])
    


    return <>
        {pokemon.map(pokemon => <div key={pokemon.name}>{pokemon.name}</div>)}
    </>

}