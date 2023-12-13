import axios from "axios";
import {server} from "../../server";

//load user
export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type: "LoadUserRequest",
        });
        const local = localStorage.getItem("token")
        const config = {
            headers: {
                token: local
            }
        }
        const {data} = await axios.get(`${server}/user/getUser`,config);
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });

    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message,
        });
    }
} 