import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

import css from './SearchArea.module.css';
import {pokemonAction, typeAction} from "../../redux";

const SearchArea = () => {
    const { register, handleSubmit } = useForm({ mode: "all" });
    const {types} = useSelector(state => state.types);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(typeAction.getAllTypes())
    }, [dispatch])

    const getPokemon = (data) => {
        const { name, type, ability } = data;
        if (name) {
            dispatch(pokemonAction.getPokemonById(name));
            navigate(`/pokemon/${name}`)
        }
        if (type) {
            dispatch(typeAction.getTypeById(type))
            navigate(`/type/${type}`)

        }

    }

    return (
        <div className={css.inputs}>
            <form onSubmit={handleSubmit(getPokemon)} className={css.inputs}>
                    <div className={css.inputs}>
                        <div>
                            <input className={css.input} type="text" placeholder={'Name...'} {...register('name')} />
                        </div>
                        <div >
                            <button className={css.button} type="submit">Search by name</button>
                        </div>
                    </div>
            </form>

            <form className={css.inputs} onSubmit={handleSubmit(getPokemon)}>
                <div>
                    <select className={css.input} {...register('type')}>
                        {types.map((type, index) => (
                            <option key={index} value={type.name}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <div >
                    <button className={css.button} type="submit">Search by type</button>
                </div>
            </form>

            <form className={css.inputs}>
                <div>
                    <input className={css.input} type="text" placeholder={'Ability...'} {...register('ability')} />
                </div>
                <div >
                    <button className={css.button} type="submit">Search by ability</button>
                </div>
            </form>
        </div>
    );
};

export { SearchArea };
