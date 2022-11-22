import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <div className='login-container'>
                <div className="title">Войти</div>
                <form onSubmit={()=> navigate('/map')}>
                    <div className="forms">
                        <div className="form">
                            <div className="form__title">Email</div>
                            <input type='email' required placeholder='mail@mail.ru' />
                        </div>
                        <div className="form">
                            <div className="form__title">Пароль</div>
                            <input type='password' required placeholder='*************'/>
                        </div>
                    </div>
                    <div className="under-forms">Забыли пароль?</div>
                    <button className="button">Войти</button>
                </form>
                <div className="help">Новый пользователь? <span>Регистрация</span></div>
            </div>
        </div>
    );
};

export default Login;