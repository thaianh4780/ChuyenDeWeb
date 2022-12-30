import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css1/bootstrap.min.css'
import url from '../Url';
import Cookies from "universal-cookie";
export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // let errMsg = '';
    let [errMsg, setErrMsg] = '';
    let role = '';
    const [listRole, setListRole] = useState([""]);
    // let [checked, setChecked] = useState(false);
    // const handleChange = (e) => {
    //     setChecked(e.target.checked);
    // };
    const getListRole = async () => {
        await fetch(url + 'role/all')
            .then((res) => res.json())
            .then((res) => {
                setListRole(res)
            })
            .catch((err) => console.log("ERR", err));
    };
    useEffect(() => { getListRole() }, [])
    const checkRole = async () => {
        listRole.map((item) => {
            if (item.role_name == "Admin") {
                role = item;
            }
        });
        return role;
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            user_name: userName,
            password: password
        };
        checkRole();
        const cookie = new Cookies();

        await fetch(url + "user/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    setErrMsg(res.error);
                    // errMsg = res.error;
                    console.log(errMsg);
                    console.log(res.error);
                } else {
                    console.log(res.role);
                    if (res.role == role._id) {
                        cookie.set('token', res.token);
                        const user = res.user_name
                        localStorage.setItem('user', user);
                        return navigate("/admin");
                    } else {
                        return console.log("User not admin");
                    }
                }
            });
        // return loginUser(user, role, dispatch, navigate);
    }
    return (
        <>
            <div className="bg-gradient-primary">
                <div className="container mh-100 mw-100">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10">
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-flex">
                                            <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: `url("assets/img/image3.jpeg")`, marginTop: "-5%" }}></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                <form className="user" onSubmit={handleLogin}>
                                                    <div className="mb-3"><input className="form-control form-control-user" type="username" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter User Name..." name="username" onChange={(e) => setUserName(e.target.value)} /></div>
                                                    <div className="mb-3"><input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} /></div>
                                                    <div className="mb-3 text-center">
                                                        <div className="custom-control custom-checkbox small">
                                                            {/* <Checkbox
                                                                checked={checked}
                                                                onChange={handleChange}
                                                                inputProps={{ 'aria-label': 'controlled' }}
                                                            /> */}
                                                            {/* <p className="form-check-label custom-control-label" for="formCheck-1" ref={errMsg}>{errMsg}</p> */}
                                                            <label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label>
                                                            {/* <div className="form-check"><input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1" defaultChecked={checked} onChange={() => setChecked(!checked)} /><label className="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div> */}
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary d-block btn-user w-100" type="submit" >
                                                        Login
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
