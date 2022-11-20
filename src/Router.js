import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";

export const Router = [
    {
        component: <MainPage/>,
        endpoint: '/'
    },
    {
        component: <MapPage/>,
        endpoint: '/map'
    }
]