import { useState, useEffect, } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css1/bootstrap.min.css'
import url from '../Url';
import Cookies from "universal-cookie";
import "../css1/setup.css"

export default function Login() {
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const cookie = new Cookies();
    const navigate = useNavigate();
    let role = '';
    const [listRole, setListRole] = useState([""]);
    // let [checked, setChecked] = useState(false);
    // const handleChange = (e) => {
    //     setChecked(e.target.checked);
    // };

    const notificate = (err) => {
        toast.error(err , {
            position: "top-center",
            autoClose: 600,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
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
        await fetch(url + "user/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    notificate(res.error)
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
            <div className="bg-gradient-primary line">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-lg-12 col-xl-10 cont">
                            <div className="card shadow-lg o-hidden border-0 my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-flex">
                                            <div className="flex-grow-1 bg-login-image" style={{ backgroundImage: `url("assets/img/a7.jpg")`, }}></div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h4 className="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                <form className="user" onSubmit={handleLogin}>
                                                    <div className="mb-3">
                                                        <input className="form-control form-control-user" type="username" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter User Name..." name="username" onChange={(e) => setUserName(e.target.value)} />
                                                        </div>
                                                    <div className="mb-3">
                                                        <input className="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                                            </div>
                                                    <div className="mb-3 text-center">
                                                        <div className="custom-control custom-checkbox small">
                                                            {/* <Checkbox
                                                                checked={checked}
                                                                onChange={handleChange}
                                                                inputProps={{ 'aria-label': 'controlled' }}
                                                            /> */}
                                                            {/* <p className="form-check-label custom-control-label" for="formCheck-1" ref={errMsg}>{errMsg}</p> */}
                                                            {/* <label ref={errMsg} className="form-check-label custom-control-label" aria-live="assertive" for="formCheck-1">{errMsg}</label> */}
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
