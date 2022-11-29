import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const logIn = (email, password) => {
        if (email !== "ok@mail.ru" || password !== "123"){
            return
        }
        setIsLoggedIn(true);
    }
    const logOut = () => {
        setIsLoggedIn(false);
    }
    return (
        <AuthContext.Provider value={{logIn, logOut, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const withAuth = Component => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        (value) => {
                            return <Component {...value} {...this.props} />
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}