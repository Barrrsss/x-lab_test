import React from 'react';
import {Route} from 'react-router-dom';

function Header({token, onSignOut}) {
    return (
        <header className="header">
                <Route path="/login">
                    <p className='header__title'>Тестовое задание</p>
                </Route>
                <Route exact path="/">
                        <p className='header__email'>Auth token: {token}</p>
                        <button className='header__button' onClick={onSignOut}>Выйти</button>
                </Route>
        </header>
    );
}

export default Header
