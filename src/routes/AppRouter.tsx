
import { BrowserRouter, Route, Routes } from "react-router";
import { CursosScreen } from "../componets/screens/CursosScreen";
import { EstudiantesScrean } from "../componets/screens/EstudiantesScreen";


export const AppRouter=()=>{

return (
    <BrowserRouter>
        <Routes>    
            <Route path="/" element={
                <CursosScreen/>
            }/>
            <Route path="/estudiantes/:ID" element={
                <EstudiantesScrean/>
            }/>
        </Routes>
    </BrowserRouter>
    )
}

