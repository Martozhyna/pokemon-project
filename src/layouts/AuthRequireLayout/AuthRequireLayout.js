import {Outlet} from "react-router-dom";

import {Header} from "../../components";

const AuthRequireLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
export {AuthRequireLayout}