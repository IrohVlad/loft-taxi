import MainPage from "./pages/MainPage";
import RegPage from "./pages/RegPage";

export const Router = [
    {
        component: <MainPage/>,
        endpoint: '/'
    },
    {
        component: <RegPage/>,
        endpoint: '/reg'
    }
]