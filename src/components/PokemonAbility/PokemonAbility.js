import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";

import css from '../StyleModule/StyleModule.module.css';
import { abilityAction } from "../../redux";

const PokemonAbility = ({ ability }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [effect, setEffect] = useState(null);
    const splittedApiKey = ability.ability.url.split("/")
    const id = splittedApiKey[splittedApiKey.length - 2]

    useEffect(() => {
        const getEffect = async () => {
            const {payload} = await dispatch(abilityAction.getAbilityById(id))
            const enEffect = payload.effect_entries.find(entry => entry.language.name === 'en');
            setEffect(enEffect)
        }
        getEffect()

    }, [dispatch, id]);

    const showDetail = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={css.list} onClick={showDetail}>
                {ability.ability.name}
            </div>
            <div className={css.position}>
                {open && (
                    <div>
                        {effect && (
                            <p>{effect.effect}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export { PokemonAbility };
