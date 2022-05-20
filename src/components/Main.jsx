import React, { useEffect, useState } from "react";
import Card  from "./Card";
import Info from "./Info";
import axios from "axios";

const Main = () =>{
    const [pokeData, setPokeData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [url, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        console.log(res)
    }

    useEffect(()=>[
        pokeFun()
    ], [url])
    
    return(
        <div>
            <div className="container">
                <div className="left-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <Info/>
                </div>
            </div>
        </div>
    )
}

export default Main;