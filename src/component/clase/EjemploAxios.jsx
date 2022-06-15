import { useState,useEffect } from "react"
import React from "react"
import axios from "axios"

export const EjemploAxios = () => {

    const [pokemon,setPokemon] = useState([])


    useEffect(() => {
        const getPokemons = ()=>{
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=11') 
            .then(res => {setPokemon(res.data.results)})
        }
        getPokemons()
    },[])


    return <>
        <ul>
        {pokemon.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
        </ul>
    </>

}