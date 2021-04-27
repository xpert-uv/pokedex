import React from "react";
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';
const style = {
    width: 18
}
const Pokecard = ({ id, name, type, base_experience }) => {
    let imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className="col my-3">
            <div className="card mycard" >
                <img src={imgSrc} className="card-img-top" alt={name}></img>
                <div className="card-body">
                    <ul>
                        <li>id:{id}</li>
                        <li>Name : {name}</li>
                        <li>Type: {type}</li>
                        <li>base_experience:{base_experience}</li>
                    </ul>
                </div>
            </div >
        </div>)
}




export default Pokecard;