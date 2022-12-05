export const LogIn = () => ({type: 'LOG_IN'});
export const LogOut = () => ({type: 'LOG_OUT'});
export const Authenticate = (mail, pass) => ({type: 'AUTHENTICATE', payload: {mail, pass}}) 