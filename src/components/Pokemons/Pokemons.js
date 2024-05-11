import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pokemonAction} from '../../redux';
import {Pokemon} from '../Pokemon/Pokemon';
import css from './Pokemons.module.css';
import {useSearchParams} from "react-router-dom";
import {Paginate} from "../Paginate/Paginate";

const Pokemons = () => {

    const {pokemons, previous, next} = useSelector(state => state.pokemons);
    const [query, setQuery] = useSearchParams({offset: null, limit: 20});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(pokemonAction.getAllPokemons({offset: query.get("offset"), limit: query.get("limit")}));
    }, [dispatch, query]);


    return (
        <div>
            <div className={css.pokemons}>
                {pokemons && pokemons.map(pokemon => (
                    <Pokemon key={pokemon.name} pokemon={pokemon}/>
                ))}
            </div>
          <Paginate previous={previous} setQuery={setQuery} query={query} next={next}/>
        </div>
    );
};

export {Pokemons};
