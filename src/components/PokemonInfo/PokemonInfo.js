import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {pokemonAction} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import css from './PokemonInfo.module.css';
import {PokemonStat} from "../PokemonStat/PokemonStat";
import {PokemonAbility} from "../PokemonAbility/PokemonAbility";
import {PokemonType} from "../PokemonType/PokemonType";
import {PokemonForm} from "../PokemonForm/PokemonForm";

const PokemonInfo = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {pokemon} = useSelector(state => state.pokemons);
    console.log(pokemon)


    useEffect(() => {
        dispatch(pokemonAction.getPokemonById(id));

    }, [dispatch, id]);
    return (
        <div>

            <div className={css.mainInfo}>
                <div className={css.card}>
                    <div className={css.bg}>
                        <h1>Pokemon № {pokemon.id}</h1>
                        {
                            pokemon.sprites &&
                            <img src={pokemon.sprites.front_default} className={css.img} alt={pokemon.name}/>

                        }
                        <h1>{pokemon.name}</h1>
                    </div>
                    <div className={css.blob}>

                    </div>

                </div>
                <div>
                    {
                        pokemon.stats && pokemon.stats.map(stat => (<PokemonStat key={stat.stat.name} stat={stat}/>))
                    }
                </div>
            </div>
            <div className={css.mainInfo}>
                <div>
                    <h2 className={css.text}>
                        Abilities:
                    </h2>

                    {
                        pokemon.abilities && pokemon.abilities.map(ability => (
                            <PokemonAbility key={ability.ability.name} ability={ability}/>))
                    }
                </div>
                <div>
                    <h2 className={css.text}>
                        Types:
                    </h2>

                    {
                        pokemon.types && pokemon.types.map(type => (
                            <PokemonType key={type.slot} type={type}/>
                        ))
                    }
                </div>
                <div>
                    <h2 className={css.text}>
                        Forms:
                    </h2>

                    {
                        pokemon.forms && pokemon.forms.map(form => (
                            <PokemonForm key={form.name} form={form}/>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}
export {PokemonInfo}