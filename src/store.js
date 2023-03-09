import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/UserSlice";
import profileReducer from "./Reducers/ProfilePopupSlice";
import roomPopupReducer from "./Reducers/RoomPopupSlice";
import addPlayerReducer from "./Reducers/AddPlayerPopupSlice";
import showScenePopupReducer from "./Reducers/showScenePopupSlice";
import showResourcePopupReducer from "./Reducers/showResourcePopupSlice";
import showCreateScenePopupReducer from "./Reducers/showCreateScenePopupSlice";
import showAddPiecePopupReducer from "./Reducers/showAddPiecePopupSlice";
import showEditRoomPopupReducer from "./Reducers/showEditRoomPopupSlice";
import PieceToDropReducer from "./Reducers/PieceToDropSlice";
import roomReducer from "./Reducers/RoomSlice";

// persist imports
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import thunk from 'redux-thunk'; // Thunk, in case we want it later.

/// Other persist stuff
// configures persisting
const persistConfig = {
  key: "root",
  storage,
};

// Combining the persisted reducers
const rootReducer = combineReducers({
  user: userReducer,
  room: roomReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Standard store setup
export const store = configureStore({
  reducer: {
    ProfilePopup: profileReducer,
    RoomPopup: roomPopupReducer,
    AddPlayerPopup: addPlayerReducer,
    showScenePopup: showScenePopupReducer,
    showResourcePopup: showResourcePopupReducer,
    showCreateScenePopup: showCreateScenePopupReducer,
    showAddPiecePopup: showAddPiecePopupReducer,
    showEditRoomPopup: showEditRoomPopupReducer,
    PiecesToDrop: PieceToDropReducer,
    persistedReducer: persistedReducer,
  },
  // middleware: [thunk] // Again, thunk in case we want it.
});

export let persistor = persistStore(store);

export default { store, persistor };
