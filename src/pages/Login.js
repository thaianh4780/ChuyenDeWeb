import React from 'react'
import { Link } from 'react-router-dom'
import '../css1/bootstrap.min.css'


export default function Login() {
    return (
        <>
            <div class="bg-gradient-primary">
                <div class="container mh-100 mw-100">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-12 col-xl-10">
                            <div class="card shadow-lg o-hidden border-0 my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-6 d-none d-lg-flex">
                                            <div class="flex-grow-1 bg-login-image" style={{ backgroundImage: `url("assets/img/image3.jpeg")`, marginTop: "-5%" }}></div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h4 class="text-dark mb-4">Welcome Back!</h4>
                                                </div>
                                                <form class="user">
                                                    <div class="mb-3"><input class="form-control form-control-user" type="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" /></div>
                                                    <div class="mb-3"><input class="form-control form-control-user" type="password" id="exampleInputPassword" placeholder="Password" name="password" /></div>
                                                    <div class="mb-3">
                                                        <div class="custom-control custom-checkbox small">
                                                            <div class="form-check"><input class="form-check-input custom-control-input" type="checkbox" id="formCheck-1" /><label class="form-check-label custom-control-label" for="formCheck-1">Remember Me</label></div>
                                                        </div>
                                                    </div>
                                                    <Link to="/admin" >
                                                        <button class="btn btn-primary d-block btn-user w-100" type="submit" >
                                                            Login
                                                        </button>
                                                    </Link>
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
