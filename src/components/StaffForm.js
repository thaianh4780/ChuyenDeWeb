import React from 'react'

export default function StaffForm() {
    return (
        <div className="row w-100 h-100">
            <div className="col-4" />
            <div className="col-4">
                <form className="bg-white ">
                    <div className="row d-block w-100 h-100 text-center p-5">
                        <h1 className="mb-2 text-primary">Staff Adding</h1>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">User Name</label>
                            <input type="text" className="form-control my-2" id="inputEmail4" placeholder="User Name" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Full Name</label>
                            <input type="text" className="form-control my-2" id="inputFullName" placeholder="Full Name" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputEmail4">Phone</label>
                            <input type="text" className="form-control my-2" id="inputPhone" placeholder="123456" />
                        </div>
                        <div className="col my-3 text-start">
                            <label htmlFor="inputState">Role</label>
                            <select id="inputState" className="form-control my-2">
                                <option selected>Choose...</option>
                                <option>...</option>
                                <option>...</option>
                                <option>...</option>
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
