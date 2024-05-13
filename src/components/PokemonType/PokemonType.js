import css from '../StyleModule/StyleModule.module.css';

const PokemonType = ({type}) => {
    return (
        <div className={css.list}>
            {type.type.name}
        </div>
    )
}
export {PokemonType}