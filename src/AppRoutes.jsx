import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import Login from "./pages/Login/Login";
import Signin from "./pages/Login/Signin";
import Home from "./pages/Home/Home";
import Prestador from "./pages/Prestador/Prestador";
// import Pessoa from "./pages/Pessoa/Pessoa";

import { AuthProvider } from "./contexts/Auth";
import PublicLayout from "./layouts/PublicLayout";
import PerfilPage from "./pages/perfil/PerfilPage";
import PerfilServicoPage from "./pages/perfil/PerfilServicoPage";
import PerfilServicoCadastroPage from "./pages/perfil/PerfilServicoCadastroPage";
import ServicoPage from "./pages/ServicoPage";

const AppRoutes = () => {
  
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />

          <Route exact path="/" element={<PublicLayout />}>
            <Route path="" element={<Home />} />
            <Route exact path="prestador" element={<Prestador />} />
            <Route exact path="servicos" element={<ServicoPage />} />
          </Route>

          <Route exact path="/perfil" element={<PublicLayout />}>
            <Route path="" element={<PerfilPage />} />
            <Route exact path="servicos" element={<PerfilServicoPage />} />
            <Route exact path="servicos/novo" element={<PerfilServicoCadastroPage />} />
          </Route>
          
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
