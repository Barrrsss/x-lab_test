import React from 'react'
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import ESC_KEYCODE from '../utils/keycode'
import api from "../utils/api";
import {UserContext} from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import * as auth from '../utils/auth';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import Login from './Login';


function App() {
    const [allUser, setAllUser] = useState({
        id: '',
        last_login: '',
        is_superuser: '',
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        is_staff: '',
        is_active: '',
        date_joined: '',
        groups: [],
        user_permissions: []
    });


    //попапы
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [isSucessTooltip, setIsSucessTooltip] = useState(false);
    //авторизация
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const history = useHistory();

    //получаем информацию о карточках и пользователе
    useEffect(() => {
        if (loggedIn) {
            api.getAllData()
                .then((response => {
                    console.log(response);
                    const [userData] = response;
                    setAllUser (userData);
                }))
                .catch((err) => {
                    console.log(err);
                })
        }

    }, [loggedIn])
    //аутентификация и токен
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            auth.getContent(token)
                .then(data => {
                    if (data) {
                        setToken(token)
                        handleLoggedIn();
                        history.push('/');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history]);

    //закрытие попапа по оверлею
    function handleOverlayClose(evt) {
        if (evt.target.classList.contains("popup")) {
            closeAllPopups();
        }
    }


    function handleLoggedIn() {
        setLoggedIn(!loggedIn);
    }

    // //обработчик авторизации пользователя
    function handleLogin(password, email) {
        auth.authorize(password, email)
            .then(data => {
                if (data.auth_token) {
                    handleLoggedIn();
                    localStorage.setItem('token', data.auth_token);
                    history.push('/');
                }
            })
            .catch(err => {
                setIsTooltipOpen(true);
                setIsSucessTooltip(false);
                setTimeout(() =>
                    setIsTooltipOpen(false), 2000);
                console.log(err);
            })
    }

    //обработчик выхода пользователя
    function handleSignOut() {
        localStorage.removeItem('token');
        console.log(localStorage.removeItem('token'))
        setLoggedIn(false);
        history.push('/login');
    }


    //функционал для открытия и закрытия попапов

    function closeAllPopups() {
        setIsTooltipOpen(false);
    }

    //закрытие по esc
    function onKeyPressed(e) {
        if (e.keyCode === ESC_KEYCODE) {
            closeAllPopups();
        }
    }


    return (
        <UserContext.Provider value={allUser}>
            <div className="body" onKeyDown={onKeyPressed} tabIndex="0">
                <div className="page">
                    <Header token={token} onSignOut={handleSignOut}/>
                    <Switch>
                        <Route exact path="/">
                            {loggedIn ? <Redirect to="/"/> : <Redirect to="/login"/>}
                            <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Main} />
                        </Route>

                        <Route path="/login">
                            <Login handleLogin={handleLogin}/>
                        </Route>
                    </Switch>
                    <Footer/>

                    <InfoTooltip isTooltipStatus={isSucessTooltip}  isOpen={isTooltipOpen}
                                 onClose={closeAllPopups} onPopupOverlayClose={handleOverlayClose}/>
                </div>
            </div>
        </UserContext.Provider>

    );
}

export default App;
