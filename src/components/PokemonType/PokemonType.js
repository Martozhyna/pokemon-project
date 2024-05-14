import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import css from '../StyleModule/StyleModule.module.css';
import {typeAction} from "../../redux";

const PokemonType = ({type}) => {
    const splittedApiKey = type.type.url.split("/")
    const id = splittedApiKey[splittedApiKey.length - 2]
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [typesInfo, setTypesInfo] = useState(null);

    useEffect(() => {
        const getType = async () => {
            const {payload} = await dispatch(typeAction.getTypeById(id))
            setTypesInfo(payload.damage_relations)
        }
        getType()
    }, [dispatch, id])

    const showDetail = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={css.list} onClick={showDetail}>
                {type.type.name}
            </div>
            {
                open && (
                    <div>
                        {typesInfo && (
                            <div>
                                <div>
                                    <b>Double damage from:</b> {typesInfo.double_damage_from.map((t) => t.name).join(', ')}
                                </div>
                                <div>
                                    <b>Double damage to:</b> {typesInfo.double_damage_to.map((t) => t.name).join(', ')}
                                </div>
                                <div>
                                    <b>Half damage from:</b> {typesInfo.half_damage_from.map((t) => t.name).join(', ')}
                                </div>
                                <div>
                                    <b>Half damage to:</b> {typesInfo.half_damage_to.map((t) => t.name).join(', ')}
                                </div>
                                <div>
                                    <b>No damage from:</b> {typesInfo.no_damage_from.map((t) => t.name).join(', ')}
                                </div>
                                <div>
                                    <b>No damage to:</b> {typesInfo.no_damage_to.map((t) => t.name).join(', ')}
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
        </div>
    )
}

export {PokemonType}
