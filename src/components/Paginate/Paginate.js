import css from './Paginate.module.css';

const Paginate = ({previous, next, query, setQuery}) => {

    const handlePrevClick = () => {
        if (previous) {
            const urlParams = previous.split('offset=')[1];
            const params = urlParams.split('&')[0];
            setQuery({offset: params, limit: query.get("limit")});
        }
    };

    const handleNextClick = () => {
        if (next) {
            const urlParams = next.split('offset=')[1];
            const params = urlParams.split('&')[0];
            setQuery({offset: params, limit: query.get("limit")});
        }
    };

    return (
        <div className={css.container}>
            <button onClick={handlePrevClick} disabled={!previous} className={css.button}>
                Prev
            </button>
            <button onClick={handleNextClick} disabled={!next} className={css.button}>
                Next
            </button>

        </div>
    );
};

export {Paginate};
