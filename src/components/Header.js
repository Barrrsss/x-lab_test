import React from 'react';
import {Link, Route} from 'react-router-dom';

function Header({token, onSignOut}) {
    return (
        <header className="header">
                <Route path="/login">
                    <Link to='sign-up' className='header__auth_link'>Тестовое задание</Link>
                </Route>
                <Route path="/sign-up">
                    <Link to='login' className='header__auth_link'>Войти</Link>
                </Route>
                <Route exact path="/">
                        <p className='header__email'>Auth token: {token}</p>
                        <button className='header__button' onClick={onSignOut}>Выйти</button>
                </Route>
        </header>
    );
}

export default Header
