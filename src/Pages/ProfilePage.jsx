import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { EditProfile } from "./Components/EditProfile";
import CreateRoom from "./CreateRoom";
import { setProfilePopup } from "../Reducers/ProfilePopupSlice";
import { setRoomPopup } from "../Reducers/RoomPopupSlice";

const ProfilePage = () => {
  const { email } = useParams();
  const dispatch = useDispatch();

  // Getting and setting the user info into state
  const user = useSelector((state) => state.user);

  // Redux state for pop-ups
  const ProfilePopup = useSelector((state) => state.ProfilePopup);
  const RoomPopup = useSelector((state) => state.RoomPopup);

  const logOut = async () => {
    const logOutResponse = await fetch(
      "https://plotpointsbackend.onrender.com/account/logout"
    );
    dispatch(setUser(""));

    // use useNavigate here instead of a Link tag. Navigate to home page. 
  };

  return (
    <div className=" min-h-screen">
      <nav class="bg-blueSecondary">
        <div class="mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
          <div class="flex items-center justify-between">
            <a class="text-white font-bold text-xl" href="#">
              Plot Points
            </a>
          </div>
          <div class="hidden lg:flex lg:items-center">
            <Link
              to="/"
              class="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to={"/profile/" + email}
              class="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </Link>
            <Link
              to="#"
              class="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            >
              Settings
            </Link>
            <button
              onClick={logOut}
              class="text-white hover:text-goldAccents px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
        {/* <!-- Mobile menu --> */}
        <div class="flex bg-blueSecondary lg:hidden">
          <div class="px-2 pt-2 pb-3">
            <Link
              to="#"
              class="text-white hover:text-goldAccents block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              class="text-white hover:text-goldAccents block px-3 py-2 rounded-md text-base font-medium"
            >
              Profile
            </Link>
            <Link
              to="#"
              class="text-white hover:text-goldAccents block px-3 py-2 rounded-md text-base font-medium"
            >
              Settings
            </Link>
            <Link
              to="#"
              class="text-white hover:text-goldAccents block px-3 py-2 rounded-md text-base font-medium"
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <div class="bg-blueSecondary py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:flex lg:items-center lg:justify-between">
            <div class="flex-1 min-w-0">
              <div class="flex items-center">
                <div class="ml-4">
                  <h2 class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                    Welcome back.
                  </h2>
                  <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-300">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-goldAccents"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16 9a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2a1 1 0 011-1h12zm-1-6a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h12zM2 14a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Level 5 Wizard</span>
                    </div>

                    <div class="mt-2 flex items-center text-sm text-gray-300">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-goldAccents"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 2v2h10V6H4zm0 3v2h10V9H4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>{email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
              <span class="hidden sm:block ml-3">
                <button
                  onClick={() => dispatch(setProfilePopup())}
                  class="text-sm font-medium text-goldAccents hover:text-white"
                >
                  Edit Profile
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 shadow-2xl w-3/4 absolute">
        {ProfilePopup && <EditProfile />}
      </div>

      <div class="border-2 border-goldAccents bg-blueSecondary p-6 rounded-lg">
        <h2 class="text-2xl font-bold text-white">About Me</h2>
        <p class="text-white mt-4">{user.bio}</p>
      </div>
      <div class="bg-gray-800 p-4 rounded-md border-2 border-gray-700">
        <h2 class="text-xl font-semibold text-gray-200 mb-4">Rooms</h2>
        <div class="flex flex-wrap gap-4">
          <div class="w-40 h-40 rounded-md overflow-hidden text-center">
            <p class="text-gray-200 mt-4 z-10 absolute left-20">Room 1</p>
            <img
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fa5a699b2ae1327c185b53f3fb9c4eb5d.webp&w=1920&q=75"
              alt="Room 1"
              class="w-full h-full object-cover"
            ></img>
          </div>
          <div class="w-40 h-40 rounded-md overflow-hidden">
            <p class="text-gray-200 mt-4 z-10 absolute left-20">Room 2</p>
            <img
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fae9d302be8df123e90e7ec8bce177a81.webp&w=1920&q=75"
              alt="Room 2"
              class="w-full h-full object-cover"
            ></img>
          </div>
          <div class="w-40 h-40 rounded-md overflow-hidden">
            <p class="text-gray-200 mt-4 z-10 absolute left-20">Room 1</p>
            <img
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2F71cac47b944ae4144dbc6b11950d443a.webp&w=1920&q=75"
              alt="Room 3"
              class="w-full h-full object-cover"
            ></img>
          </div>
          <div class="w-40 h-40 rounded-md overflow-hidden">
            <p class="text-gray-200 mt-4 z-10 absolute left-20">Room 1</p>
            <img
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2F40c821a154b90cba3ea64f82d4e4f60d.webp&w=1920&q=75"
              alt="Room 4"
              class="w-full h-full object-cover"
            ></img>
          </div>
          <div class="w-40 h-40 rounded-md overflow-hidden">
            <p class="text-gray-200 mt-4 z-10 absolute left-20">Room 1</p>
            <img
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2Fd0175d014e6a93f1e2947be1449f0083.webp&w=1920&q=75"
              alt="Room 5"
              class="w-full h-full object-cover"
            ></img>
          </div>
          <div class="w-40 h-40 rounded-md overflow-hidden">
            <p class="text-gray-200 mt-4 z-10 absolute left-20">Room 1</p>
            <img
              src="https://www.czepeku.com/_next/image?url=https%3A%2F%2Fdan-sst-imageresize-mystack-bucketd7feb781-1513bmdx4x8mh.s3.amazonaws.com%2Fmap%2Fpreview%2F7157801838e538c96cefc4d1a62cbbe0.webp&w=1920&q=75"
              alt="Room 6"
              class="w-full h-full object-cover"
            ></img>
          </div>
        </div>
        <button
          class="mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-700 text-gray-200 rounded-md"
          id="openButton"
          onClick={() => dispatch(setRoomPopup())}
        >
          Create Room
        </button>
      </div>

      <div className="z-10 shadow-2xl w-3/4 absolute">
        {RoomPopup && <CreateRoom />}
      </div>

      <div class="footer border-t-2 border-goldAccents p-4 bg-blueSecondary text-white">
        <p>© 2023 An average table</p>
      </div>
    </div>
  );
};

export default ProfilePage;
