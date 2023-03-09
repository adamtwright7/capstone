import React, { useEffect, useState } from "react";
import "./player.css";
import { Link } from "react-router-dom";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AddPlayer } from "./AddPlayer";
import { useDispatch, useSelector } from "react-redux";
import { setAddPlayerPopup } from "../../Reducers/AddPlayerPopupSlice";

export const Player = () => {
  const AddPlayerPopup = useSelector((state) => state.AddPlayerPopup);
  const dispatch = useDispatch();

  // When the page loads, we need to view all the users in this room.
  const room = useSelector((state) => state.persistedReducer.room);

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const JSONroomID = JSON.stringify({ roomID: room.id });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSONroomID,
      redirect: "follow",
    };

    const usersRaw = await fetch(
      "https://plotpointsbackend.onrender.com/rooms/viewUsers",
      requestOptions
    );

    const usersResult = await usersRaw.json();
    setUsers(usersResult); // Store these rooms in local state
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="playerMain">
        <div className="twoIcon">
          <Link to="/profile">
            <img
              className="twoimg"
              src="https://t4.ftcdn.net/jpg/03/28/56/91/360_F_328569104_sSbOz4NwgpRSqCYD7pzXk0PVUttE4Oum.jpg"
              alt=""
            />
          </Link>
          <Link to="/">
            <img
              className="twoimg"
              src="https://cdn4.vectorstock.com/i/1000x1000/85/23/soccer-player-flat-icon-vector-7558523.jpg"
              alt=""
            />
          </Link>
        </div>
        {/* bottom portion */}
        <div className="mainBottom">
          <div className="top">
            <div className="icons">
              <h3>Players</h3>
              <div className="imgIcons">
                <button onClick={() => dispatch(setAddPlayerPopup())}>
                  <AiFillPlusSquare />
                </button>
                <button>
                  <BsFillPersonFill />
                </button>
              </div>
            </div>
          </div>
          {/* {users.map((user) => {
            <div className="bottom">
              <div className="leftBottom">
                <div></div>
                <p>{user.name}</p>
              </div>
              <ul className="dots">
                <div></div>
                <div></div>
                <div></div>
              </ul>
            </div>;
          })} */}
        </div>
      </div>
      <div className="popUpPlayer">{AddPlayerPopup && <AddPlayer />}</div>
    </>
  );
};
