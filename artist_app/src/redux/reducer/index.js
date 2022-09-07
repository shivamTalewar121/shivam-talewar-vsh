import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { createUserReducer } from "./createUserReducer";
import { ArtistReducer } from "./ArtistReducer";
import {AlbumReducer} from './AlbumReducer';
import {RatingReducer} from './RatingReducer'

export const rootReducer = combineReducers({
    UserReducer, createUserReducer, ArtistReducer, AlbumReducer, RatingReducer
})