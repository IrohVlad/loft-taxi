import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    const navigate = useNavigate();
    return (
        <div className='reg'>
            <div className='login-container'>
                <div className="title">Регистрация</div>
                <form onSubmit={()=> navigate('/map')}>
                    <div className="forms">
                        <div className="form">
                            <div className="form__title">Email*</div>
                            <input type='email' required placeholder='mail@mail.ru' />
                        </div>
                        <div className="form">
                            <div className="form__title">Как вас зовут?*</div>
                            <input type='text' required placeholder='Петр Александрович' />
                        </div>
                        <div className="form">
                            <div className="form__title">Придумайте пароль*</div>
                            <input type='password' required placeholder='*************'/>
                        </div>
                    </div>
                    <button className="button">Зарегистрироваться</button>
                </form>
                <div className="help">Уже зарегестрированны? <span>Войти</span></div>
            </div>
        </div>
    );
};

export default Reg;