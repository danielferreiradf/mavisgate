import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import monster from "./monster";

export default combineReducers({ alert, auth, profile, monster });
