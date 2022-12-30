import { loginStart, loginSuccess, loginFailed } from "./authSlice";
import url from "../Url";
import Cookies from "universal-cookie";

export const loginUser = async (user, role, dispatch, navigate) => {
    try {
        const cookie = new Cookies();
        dispatch(loginStart());
        await fetch(url + "user/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    console.log(res.error);
                } else {
                    console.log(res.role);
                    if (res.role == role._id) {
                        dispatch(loginSuccess(res));
                        cookie.set('token', res.token);
                        const user = res.user_name
                        localStorage.setItem('user', user);
                        return navigate("/admin");
                    } else {
                      return console.log("User not admin");
                    }
                }
            });

    } catch (error) {
        dispatch(loginFailed)
    }
}