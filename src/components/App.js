import React from 'react'
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ESC_KEYCODE from '../utils/keycode'
import api from "../utils/api";
import * as auth from '../utils/auth';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import Login from './Login';


function App() {
    const [allUser, setAllUsers] = useState([]);


    //попапы
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    //авторизация
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const history = useHistory();

    //получаем информацию пользователях
    useEffect(() => {
        if (loggedIn) {
            api.getAllData()
                .then((response => {
                    const [userData] = response;
                    setAllUsers (userData);
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
    }, []);

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
    function handleLogin(password, username) {
        auth.authorize(password, username)

            .then(data => {
                if (data.auth_token) {
                    handleLoggedIn();
                    localStorage.setItem('token', data.auth_token);
                    history.push('/x-lab_test/');
                }
            })
            .catch(err => {
                setIsTooltipOpen(true);
                setTimeout(() =>
                    setIsTooltipOpen(false), 2000);
                console.log(err);
            })
    }

    //обработчик выхода пользователя
    function handleSignOut() {
        const token = localStorage.getItem('token');
        auth.logout(token)
            .then(response => {
                localStorage.removeItem('token');
                console.log(localStorage.removeItem('token'))
                setLoggedIn(false);
                history.push('/x-lab_test/login');
                console.log(response + '1')
            })

    }



    function closeAllPopups() {
        setIsTooltipOpen(false);
    }

    //закрытие по esc
    function onKeyPressed(e) {
        if (e.keyCode === ESC_KEYCODE) {
            closeAllPopups();
        }
    }

    //сортировка

    const [sortFromId, setSortFromId] = React.useState(true);
    const [sortFromUsername, setSortFromUsername] = React.useState(true);


    function handleSortId() {
        sortFromId
            ? setAllUsers([...allUser.sort((a, b) => a.id - b.id)])
            : setAllUsers([...allUser.sort((a, b) => b.id - a.id)]);
        setSortFromId(!sortFromId);
    }
    function handleSortUsername() {
        sortFromUsername
            ? setAllUsers([...allUser.sort((a, b) => (a.username > b.username ? 1 : -1))])
            : setAllUsers([...allUser.sort((a, b) => (a.username < b.username ? 1 : -1))]);
        setSortFromUsername(!sortFromUsername);
    }

    return (
            <div className="body" onKeyDown={onKeyPressed} tabIndex="0">
                <div className="page">
                    <Header token={token} onSignOut={handleSignOut}/>
                    <Switch>
                        <Route exact path="/x-lab_test/">
                            {loggedIn ? <Redirect to="/x-lab_test"/> : <Redirect to="/x-lab_test/login"/>}
                            <ProtectedRoute exact path="/x-lab_test/" users={allUser} loggedIn={loggedIn} component={Main}
                                            onIdClick={handleSortId} onUsernameClick={handleSortUsername}
                            />
                        </Route>

                        <Route path="/x-lab_test/login">
                            <Login handleLogin={handleLogin}/>
                        </Route>
                    </Switch>
                    <Footer/>

                    <InfoTooltip isOpen={isTooltipOpen}
                                 onClose={closeAllPopups} onPopupOverlayClose={handleOverlayClose}/>
                </div>
            </div>

    );
}

export default App;
