import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { createUserReducer } from "./createUserReducer";
import { ArtistReducer } from "./ArtistReducer";

export const rootReducer = combineReducers({
    UserReducer, createUserReducer, ArtistReducer
})