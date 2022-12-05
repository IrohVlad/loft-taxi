import { LogIn } from "./actions";
import { serverLogin } from "../api";


export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === 'AUTHENTICATE'){
        const {mail, pass} = action.payload;
        const success = await serverLogin(mail, pass);
        console.log(success);
        if(success) {
            store.dispatch(LogIn())
        }
    }
    else {
        next(action);
    }
}