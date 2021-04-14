import React, {useState} from 'react';


export default function Login({handleLogin}) {

    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!username || !username){
            return;
        }
        handleLogin(password, username);
    }

    function handleEmail(evt) {
        setUsername(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    return (
        <form className="auth" method="POST" name="login" onSubmit={handleSubmit} noValidate>
            <h2 className="auth__head">Вход</h2>
            <input className="auth__input" type="email" name="email" placeholder="E-mail" value={username} onChange={handleEmail} />
            <input className="auth__input" type="password" name='password' placeholder="Пароль" value={password} onChange={handlePassword} />
            <button className="auth__button" type="submit">Войти</button>
        </form>
    )
}
