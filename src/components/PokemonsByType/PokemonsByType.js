import {useSelector} from "react-redux";

import css from "../Pokemons/Pokemons.module.css";
import {Pokemon} from "../Pokemon/Pokemon";

const PokemonsByType = () => {
    const {type} = useSelector(state => state.types);

    return (
        <div>
            <h2 className={css.pokemons}>Pokemon with {type.name} type</h2>
            <div className={css.pokemons}>
                {type.pokemon && type.pokemon.map(pokemon => (
                    <Pokemon key={pokemon.pokemon.name} pokemon={pokemon.pokemon}/>
                ))}
            </div>
        </div>
    )
}
export {PokemonsByType}