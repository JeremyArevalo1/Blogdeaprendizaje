import { MainPage } from "./pages/mainPage";
import { TallerPage } from "./pages/tallerPage";
import { TecnoPage } from "./pages/tecnoPage";
import { PracticaPage } from "./pages/practicaPage";

const routes = [
    { path: "/", element: <MainPage /> },
    { path: "/tallerPage/:courseName", element: <TallerPage /> },
    { path: "/tecnologiaPage/:courseName", element: <TecnoPage /> },
    { path: "/ticsPage/:courseName", element: <PracticaPage /> },
];
  
export default routes