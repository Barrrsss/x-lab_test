import React, {useContext} from "react";
import {UserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const currentUser = useContext(UserContext);
    return (
        <main className="content">
            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    );
}

export default Main

