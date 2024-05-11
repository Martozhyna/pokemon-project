import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {AuthRequireLayout, MainLayout} from "./layouts";
import {PokemonsPage} from "./pages";

function App() {

  return (
  <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'pokemon'}/>}/>

          <Route element={<AuthRequireLayout/>}>
              <Route path={'pokemon'} element={<PokemonsPage/>}/>
          </Route>

      </Route>
  </Routes>
  );
}

export {
  App
};
