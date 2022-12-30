import { useState, useEffect } from 'react';
import url from '../Url';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom'

export default function StaffForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const notificate = (err) => {
        toast.error(err, {
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
    const [staff, setStaff] = useState({
        user_name: '',
        password: '',
        full_name: '',
        phone: '',
        role: '',
    })
    const [listRole, setlistRole] = useState(['']);
    useEffect(() => { window.location.href == '/staffadding' ? getAllRole() : getAllRole(); getUser() }, []);
    //get all role
    const getAllRole = async () => {
        await fetch(url + 'role/all')
            .then((res) => res.json())
            .then((res) => {
                var data = res;
                setlistRole(data);
            })
            .catch((err) => console.log("ERR", err));
    };
    //get staff by id
    const getUser = async () => {
        if (id) {
            await fetch(url + 'user/getbyid/' + id)
                .then((res) => res.json())
                .then((res) => {
                    var data = res;
                    setStaff(data);
                })
                .catch((err) => console.log("ERR", err));
        } else {

            return console.log("err");
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        window.location.pathname == '/staffadding' ?
            addUser(staff)
            :
            updateUser(staff);
    }
    //add user
    const addUser = async (values) => {
        await fetch(url + 'user/add', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res.json()).then(data => {
            if (data.error) {
                notificate(data.error);
            } else {
                return navigate('/admin');
            }
        })
    }

    //update user
    const updateUser = async (values) => {
        console.log(values);
        fetch(url + 'user/update/' + id, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(values),
        }).then(res => res).then(data => {
            if (data.error) {
                notificate(data.error);
            } else {
                return navigate('/admin');
            }
        })
    }

    const addForm = () => {
        return <div className="col my-3 text-start">
            <label htmlFor="inputEmail4">Password</label>
            <input type="text" className="form-control my-2 offscreen" id="inputEmail4" placeholder="User Name" value={staff.password} onChange={(e) => setStaff((oldValue) => ({ ...oldValue, password: e.target.value }))} />
        </div>
    }

    return (
        <div className="row w-100 h-100">
            <div className="col-4" />
            <div className="col-4">
                <form className="bg-white " onSubmit={handleSubmit}>
                    <div className="row d-block w-100 h-100 text-center p-5">
                        <h1 className="mb-2 text-primary">Staff {window.location.pathname == '/staffadding' ? "Addding" : "Update"}</h1>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">User Name</label>
                            <input type="text" className="form-control my-2" id="inputEmail4" placeholder="User Name" value={staff.user_name} onChange={(e) => setStaff((oldValue) => ({ ...oldValue, user_name: e.target.value }))} />
                        </div>
                        {window.location.pathname == '/staffadding' ? addForm() : ''}
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Full Name</label>
                            <input type="text" className="form-control my-2" id="inputFullName" placeholder="Full Name" value={staff.full_name} onChange={(e) => setStaff((oldValue) => ({ ...oldValue, full_name: e.target.value }))} />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Phone</label>
                            <input type="text" className="form-control my-2" pattern="[0-9]*" id="inputPhone" placeholder="123456" value={staff.phone} onChange={(e) => setStaff((oldValue) => ({ ...oldValue, phone: e.target.value }))} />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputState">Role</label>
                            <select id="inputState" className="form-control my-2" value={staff.role} onChange={(e) => setStaff((oldValue) => ({ ...oldValue, role: e.target.value }))}>
                                <option selected >Choose...</option>
                                {listRole.map((item) => {
                                    return <option value={item._id}>{item.role_name}</option>
                                })}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-4" />
        </div>
    )
}
