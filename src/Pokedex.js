import React from "react";
import Pokecard from './Pokecard';

const Pokedex = ({ arr }) => {

    return (
        <div >
            <h2 className="display-2">Pokedex</h2>
            <div>
                {{ arr }.map(p => (
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                    />
                ))}
            </div>

        </div>
    );
}

export default Pokedex;
