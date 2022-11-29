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
                            <label className="form__title">Как вас зовут?*</label>
                            <input name='name' type='text' required placeholder='Петр Александрович' />
                        </div>
                        <div className="form">
                            <label className="form__title">Email*</label>
                            <input name='email' type='email' required placeholder='mail@mail.ru' />
                        </div>
                        <div className="form">
                            <label className="form__title">Придумайте пароль*</label>
                            <input name='password' type='password' required placeholder='*************'/>
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