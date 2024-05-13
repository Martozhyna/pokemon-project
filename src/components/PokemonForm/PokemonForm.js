import css from '../StyleModule/StyleModule.module.css';

const PokemonForm = ({form}) => {
    return (
        <div className={css.list}>
            {
                form.name
            }
        </div>
    )
}
export {PokemonForm}