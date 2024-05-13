import css from '../StyleModule/StyleModule.module.css'

const PokemonAbility = ({ability}) => {

    return (
        <div className={css.list}>
            {ability.ability.name}
        </div>
    )
}
export {PokemonAbility}