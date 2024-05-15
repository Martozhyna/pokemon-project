import { useForm } from "react-hook-form";
import css from './SearchArea.module.css';
import { useDispatch } from "react-redux";
import { pokemonAction } from "../../redux";
import {useNavigate} from "react-router-dom";


const SearchArea = () => {
    const { register, handleSubmit } = useForm({ mode: "all" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { name } = data;
        if (name) {
            dispatch(pokemonAction.getPokemonById(name));
            navigate(`/pokemon/${name}`)
        }
    }

    return (
        <div className={css.inputs}>
            <form onSubmit={handleSubmit(onSubmit)} className={css.inputs}>
                <div>
                    <div className={css.text}>
                        <h3>Pokemon name</h3>
                    </div>
                    <div>
                        <div>
                            <input className={css.input} type="text" placeholder={'Name...'} {...register('name')} />
                        </div>
                        <div>
                            <button type="submit">Search by name</button>
                        </div>
                    </div>
                </div>
            </form>
            <form className={css.inputs}>
                <div>
                    <div className={css.text}>
                        <h3>Pokemon type</h3>
                    </div>
                    <input className={css.input} type="text" placeholder={'Type...'} {...register('type')} />
                </div>
            </form>
            <form className={css.inputs}>
                <div>
                    <div className={css.text}>
                        <h3>Pokemon ability</h3>
                    </div>
                    <input className={css.input} type="text" placeholder={'Ability...'} {...register('ability')} />
                </div>
            </form>
        </div>
    );
};

export { SearchArea };
