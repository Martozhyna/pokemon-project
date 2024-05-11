import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <img src="https://fontmeme.com/permalink/200411/ccf6b736a798252e3c4f9634631fa814.png" alt="pokemon_logo"/>
        </div>
    )
}
export {Header}