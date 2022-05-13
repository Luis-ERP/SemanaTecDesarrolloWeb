import axios from "axios";
import React, {useEffect, useState} from "react";

const Pokemon = ({thisPokemon}) =>{
    
    const[onePokemon, setOnePokemon] = useState({
        name:"",
        sprites:{
            front_default:""
        }
    });

    const getPokemon = (url) => {
        axios.get(url)
            .then((response) => {
                console.log(response);
                setOnePokemon(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getPokemon(thisPokemon.url)
    })

    return(
        <div className="pokecard">
            <h4 className="pokename">{onePokemon.name}</h4>
            <img src={onePokemon.sprites.front_default} alt="pokeimg"/>
        </div>
        
    )
        
}

export default Pokemon;