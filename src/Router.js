import MainPage from "./pages/MainPage";
import RegPage from "./pages/RegPage";
import MapPage from "./pages/MapPage";

export const Router = [
    {
        component: <MainPage/>,
        endpoint: '/'
    },
    {
        component: <RegPage/>,
        endpoint: '/reg'
    },
    {
        component: <MapPage/>,
        endpoint: '/map'
    }
]