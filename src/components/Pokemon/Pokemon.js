import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {pokemonAction} from '../../redux';
import css from './Pokemon.module.css';

const Pokemon = ({pokemon}) => {

    const dispatch = useDispatch();
    const [pokemonData, setPokemonData] = useState(null);
    const splittedApiKey = pokemon.url.split("/")
    const id = splittedApiKey[splittedApiKey.length - 2]

    useEffect(() => {
        const getPokemonData = async () => {
            const {payload} = await dispatch(pokemonAction.getPokemonById(id));
            setPokemonData(payload);
        };
        getPokemonData();
    }, [dispatch, id]);

    return (
        <div className={css.card}>
            <div className={css.bg}>
                <div>
                    {pokemonData && (
                        <img className={css.img} src={pokemonData.sprites.front_default} alt={pokemonData.name}/>
                    )}
                </div>
                <div className={css.text}>
                    {
                        pokemon.name
                    }
                </div>
            </div>
            <div className={css.blob}></div>
        </div>

    )
}

export {Pokemon};
