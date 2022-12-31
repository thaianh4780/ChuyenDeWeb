import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

export default function AdminTop() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    const cookie = new Cookies();
    const logout = () => {
        localStorage.clear();
        cookie.remove('token');
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
            <div className="container-fluid">
                <button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button">
                    <i className="fas fa-bars"></i>
                </button>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    {/* <div className="d-none d-sm-block topbar-divider"></div> */}
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow">
                            <a className="dropdown-toggle nav-link" href="#">
                                <span className="d-none d-lg-inline me-2 text-gray-600 small">Hi {user}</span>
                                <img className="border rounded-circle img-profile" src="assets1/img/avatars/avatar1.jpeg" />
                            </a>
                        </div>
                    </li>
                </ul>
                <button className="btn rounded-circle" style={{ height: 50, width: 50, textAlign: 'center', justifyContent: 'center', }}
                onClick={() => { logout() }}> <i class="fa-solid fa-right-from-bracket fs-5 m-1 text-dark"></i></button>
        </div>
        </nav >
    )
}
