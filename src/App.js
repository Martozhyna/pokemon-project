import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {AuthRequireLayout, MainLayout} from "./layouts";
import {PokemonsPage} from "./pages";
import {PokemonInfo} from "./components";

function App() {

  return (
  <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'pokemon'}/>}/>

          <Route element={<AuthRequireLayout/>}>
              <Route path={'pokemon'} element={<PokemonsPage/>}/>
              <Route path={'pokemon/:id'} element={<PokemonInfo/>}/>
          </Route>

      </Route>
  </Routes>
  );
}

export {
  App
};
