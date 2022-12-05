import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { LogOut } from '../redux/actions';
import logo1 from '../assets/favicon.svg'
import logo2 from '../assets/cardsign1.svg'

const Profile = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({cardNumber: '', expiryDate: "", cardName: "", cvc: "", token: 'recwZWv2GzEqyfUtg' })
    useEffect(async ()=>{
        const card = await fetch('https://loft-taxi.glitch.me/card?token=recwZWv2GzEqyfUtg').then(data => data.json())
        dispatch({type: 'GET_CARD', payload: card});
        setData(card);
    }, [])
    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="title">Профиль</div>
                <div className="subtitle">Ввдеите платежные данные</div>
                <div className="profile-data">
                    <div className="forms">
                        <div className="form">
                            <label htmlFor='name' className="form__title">Имя владельца</label>
                            <input name='name' onChange={e => setData({...data, cardName: e.target.value})} value={data.cardName} type='text' required />
                        </div>
                        <div className="form">
                            <label htmlFor='card' className="form__title">Номер карты</label>
                            <input name='card' onChange={e => setData({...data, cardNumber: e.target.value})} value={data.cardNumber} type='text' required />
                        </div>
                        <div className="split-form">
                            <div className="form">
                                <label htmlFor='date' className="form__title">MM/YY</label>
                                <input name='date' onChange={e => setData({...data, expiryDate: e.target.value})} value={data.expiryDate} type='text' required />
                            </div>
                            <div className="form">
                                <label htmlFor='cvc' className="form__title">CVC</label>
                                <input name='cvc' onChange={e => setData({...data, cvc: e.target.value})} value={data.cvc} type='text' required />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="upper">
                            <div className="logo">
                                <img src={logo1}></img>
                            </div>
                            <div className="date">{data.expiryDate}</div>
                        </div>
                        <div className="card-number">{data.cardNumber}</div>
                        <div className="bottom">
                            <div className="logo">
                                <img src={logo2}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    const success = fetch('https://loft-taxi.glitch.me/card', {
                        method: 'POST',
                        headers: {
                            'Content-type':'application/json'
                        },
                        body: JSON.stringify(data)
                    }).then(data => data.json()).then(data => data.success)
                    if(success){
                        dispatch({type: 'CHANGE_CARD', payload: data});
                    }
                }} className="button">Сохранить</button>
            </div>
        </div>
    );
};

export default Profile;