import React, {useState, useContext} from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({}); 
    return (
        <div className='login'>
            <div className='login-container'>
                <div className="title">Войти</div>
                <form onSubmit={()=> {
                    navigate('/map')
                    logIn(data.email, data.pass)
                    }}>
                    <div className="forms">
                        <div className="form">
                            <label htmlFor='email' className="form__title">Email</label>
                            <input name='email' onChange={e => setData({email: e.target.value, pass: data.pass})} value={data.email} type='email' required placeholder='mail@mail.ru' />
                        </div>
                        <div className="form">
                            <label htmlFor='password' className="form__title">Пароль</label>
                            <input name='password' onChange={e => setData({email: data.email, pass: e.target.value})} value={data.pass} type='password' required placeholder='*************'/>
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