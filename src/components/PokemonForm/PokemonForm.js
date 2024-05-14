import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import css from '../StyleModule/StyleModule.module.css';
import {formAction} from "../../redux";

const PokemonForm = ({form}) => {

    const splittedApiKey = form.url.split("/")
    const id = splittedApiKey[splittedApiKey.length - 2]
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [formInfo, setformInfo] = useState(null);

    useEffect(() => {
        const getType = async () => {
            const {payload} = await dispatch(formAction.getFormById(id))
            setformInfo(payload)
        }
        getType()

    }, [dispatch, id])

    const showDetail = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div className={css.list} onClick={showDetail}>
                {
                    form.name
                }
            </div>
            {
                open && (
                    <div>
                        {
                            formInfo && (
                                <div>
                                    <div>
                                        <b>Only occurs during combat</b>: {formInfo.is_battle_only.toString()}

                                    </div>
                                    <div>
                                        <b>Default form</b>: {formInfo.is_default.toString()}

                                    </div>
                                    <div>
                                        <b>This form requires mega evolution</b>: {formInfo.is_mega.toString()}

                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>

    )
}
export {PokemonForm}