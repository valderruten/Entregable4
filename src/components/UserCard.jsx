import React from "react";
import App from "../App";
import "./styles/userCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, setCloseForm }) => {
  const handleEdit = () => {
    setCloseForm, setUpdateInfo(user);
  };
  return (
    <article className="card">
      <h3 className="card__title">
        {user.first_name} {user.last_name}
      </h3>
      <ul className="card__body">
        <li className="card__item">
          <span className="card__span">email</span> {user.email}
        </li>
        <li className="card__item">
          <span className="card__span">birthday</span> {user.birthday}
        </li>
      </ul>
      <footer className="card__footer">
        {/* <button className="card__btn card__btn__trash" onClick={()=>deleteUserById(user.id)}><i className="fa-solid fa-trash-arrow-up"></i>
        </button> */}

        <button
          className="card__btn card__btn__trash"
          onClick={() => deleteUserById(user.id)}
        >
          <i className="fa-solid fa-trash-arrow-up"></i>
        </button>
        <button
          className="card__btn card__btn__edit"
          onClick={() => {
            handleEdit(user.id);
          }}
        >
          <i className="fa-solid fa-user-pen"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
