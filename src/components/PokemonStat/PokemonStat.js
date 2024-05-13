import css from './PokemonStat.module.css';

const PokemonStat = ({stat}) => {

    return (
        <div className={css.stat}>
            {stat.stat.name}: {stat.base_stat}
        </div>
    )
}
export {PokemonStat}