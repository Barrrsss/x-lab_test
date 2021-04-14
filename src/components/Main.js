import React from "react";
import Id from "./Id";
import Username from "./Username";
import Table from "./Table";

function Main(props) {
    return (
        <div className="table">
            <h1 className="table__title">Список пользователей</h1>
            <h2 className="table__subtitle">Сортировка по:</h2>
            <div className="table__buttons">
                <Id sortId={props.onIdClick} />
                <Username sortName={props.onUsernameClick} />
            </div>
            <Table data={props.users} />

        </div>
    );

}

export default Main

