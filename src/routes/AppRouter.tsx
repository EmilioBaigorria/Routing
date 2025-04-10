
import { BrowserRouter, Route, Routes } from "react-router";
import { CursosScreen } from "../componets/screens/CursosScreen";
import { EstudiantesScrean } from "../componets/screens/EstudiantesScreean";


export const AppRouter=()=>{

return (
    <BrowserRouter>
        <Routes>    
            <Route path="/" element={
                <CursosScreen/>
            }/>
            <Route path="/estudiantes" element={
                <EstudiantesScrean/>
            }/>
        </Routes>
    </BrowserRouter>
    )
}

