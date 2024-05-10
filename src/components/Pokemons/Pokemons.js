import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {pokemonAction} from '../../redux';
import {Pokemon} from '../Pokemon/Pokemon';
import css from './Pokemons.module.css';

const Pokemons = () => {
    const {pokemons} = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pokemonAction.getAllPokemons());
    }, [dispatch]);

    return (

        <div className={css.pokemons}>
            {pokemons && pokemons.map(pokemon => (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
        </div>
    )
}

export {Pokemons};
