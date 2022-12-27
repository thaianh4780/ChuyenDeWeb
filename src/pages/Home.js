import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Slider from "../component/Slider";
export default function Home() {
  return (
    <div>
      {/* <div> */}
        {/* <Header /> */}
        {/* <Slider /> */}
      {/* </div> */}
      {/* nội dung */}
      {/* <div></div> */}

      {/* <div>
        <Footer />
      </div> */}
{/* <body style="background:linear-gradient(rgba(47, 23, 15, 0.65), rgba(47, 23, 15, 0.65)), url('assets/img/bg.jpg');"> */}
    <h1 class="text-center text-white d-none d-lg-block site-heading">
        <span class="site-heading-lower">Business Casual</span>
    </h1>
    {/* <!-- <nav class="navbar navbar-dark navbar-expand-lg bg-dark py-lg-4" id="mainNav"> */}
        <div class="container">
            <a class="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Brand</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navbarResponsive">
            <span class="visually-hidden">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a></li>
                </ul>
            </div>
        </div>
    {/* </nav> --> */}
    <section class="page-section clearfix">
        <div class="container">
            <div class="intro">
                {/* <img class="img-fluid intro-img mb-3 mb-lg-0 rounded" src="assets/img/intro.jpg"> */}
                <div class="text-center intro-text p-5 rounded bg-faded">
                    <h2 class="section-heading mb-4">
                        <span class="section-heading-upper">Fresh Coffee</span>
                        <span class="section-heading-lower">Worth Drinking</span>
                    </h2>
                    <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked
                        ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning
                        routine - we guarantee it!</p>
                    <div class="mx-auto intro-button">

                        <a class="btn btn-primary d-inline-block mx-auto btn-xl" role="button" href="#">
                            Visit Us Today!
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- <section class="page-section cta"> */}
        {/* <div class="container">
            <div class="row">
                <div class="col-xl-9 mx-auto">
                    <div class="text-center cta-inner rounded">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">Our Promise</span>
                            <span class="section-heading-lower">To You</span>
                        </h2>
                        <p class="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                    </div>
                </div>
            </div>
        </div>
    </section> --> */}
    <section class="page-section cta">
        <div class="container">
            <div class="row">
                <div class="col-xl-9 mx-auto">
                    <div class="text-center cta-inner rounded">
                        <h2 class="section-heading mb-5">
                            <span class="section-heading-upper">Come On In</span>
                            <span class="section-heading-lower">We're Open</span>
                        </h2>
                        <ul class="list-unstyled text-start mx-auto list-hours mb-5">
                            <li class="d-flex list-unstyled-item list-hours-item">Sunday
                                <span class="ms-auto">Closed</span>
                            </li>
                            <li class="d-flex list-unstyled-item list-hours-item">Monday
                                <span class="ms-auto">7:00 AM to 8:00 PM</span>
                            </li>
                            <li class="d-flex list-unstyled-item list-hours-item">Tuesday
                                <span class="ms-auto">7:00 AM to 8:00 PM</span>
                            </li>
                            <li class="d-flex list-unstyled-item list-hours-item">Wednesday
                                <span class="ms-auto">7:00 AM to 8:00 PM</span>
                            </li>
                            <li class="d-flex list-unstyled-item list-hours-item">Thursday
                                <span class="ms-auto">7:00 AM to 8:00 PM</span>
                            </li>
                            <li class="d-flex list-unstyled-item list-hours-item">Friday
                                <span class="ms-auto">7:00 AM to 8:00 PM</span>
                            </li>
                            <li class="d-flex list-unstyled-item list-hours-item">Saturday
                                <span class="ms-auto">9:00 AM to 5:00 PM</span>
                            </li>
                        </ul>
                        <p class="address mb-5">
                            <em>
                                <strong>1116 Orchard Street</strong>
                                <span>Golden Valley, Minnesota</span>
                            </em>
                        </p>
                        <p class="address mb-0">
                            <small>
                                <em>Call Anytime</em>
                            </small>
                            <span>(317) 585-8468</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="page-section cta">
        <div class="container">
            <div class="row bg-light">
                <div class="vh-100 ">
                    {/* <style>
                        .bg-image-vertical {
                            position: relative;
                            overflow: hidden;
                            background-repeat: no-repeat;
                            background-position: right center;
                            background-size: auto 100%;
                        }

                        @media (min-width: 1025px) {
                            .h-custom-2 {
                                height: 100%;
                            }
                        }
                    </style> */}
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-6 text-black">
                                <div
                                    class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                    <form style="width: 23rem;">

                                        <h1 class="fw-bolder mb-3 pb-3" style="letter-spacing: 1px;">Log in</h1>

                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example18"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example18">Email address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example28"
                                                class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example28">Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <a class="btn btn-primary d-inline-block mx-auto btn-xl" role="button"
                                                href="#">
                                                Visit Us Today!
                                            </a>
                                        </div>

                                        <p class="small mb-5 pb-lg-2">
                                            <a class="text-muted" href="#!">Forgot password?</a>
                                        </p>
                                        <p>Don't have an account? 
                                            <a href="#!" class="link-info">Register here</a>
                                        </p>
                                    </form>

                                </div>

                            </div>
                            <div class="col-sm-6 px-0 d-none d-sm-block">
                                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                                    alt="Login image" class="w-100 vh-100"
                                    style="object-fit: cover; object-position: left;"> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* <!-- Section: Design Block --> */}
    <section class="page-section">
        <div class="container">
            <div class="product-item">
                <div class="d-flex product-item-title">
                    <div class="d-flex me-auto bg-faded p-5 rounded">
                        <h2 class="section-heading mb-0">
                            <span class="section-heading-upper">Blended to Perfection</span>
                            <span class="section-heading-lower">Coffees &amp; Teas</span>
                        </h2>
                    </div>
                </div>
                {/* <img class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                    src="assets/img/products-01.jpg"> */}
                <div class="bg-faded p-5 rounded">
                    <p class="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we
                        guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan
                        Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced
                        black coffee, you will be coming back for more.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="page-section">
        <div class="container">
            <div class="product-item">
                <div class="d-flex product-item-title">
                    <div class="d-flex ms-auto bg-faded p-5 rounded">
                        <h2 class="section-heading mb-0">
                            <span class="section-heading-upper">Delicious Treats, Good Eats</span>
                            <span class="section-heading-lower">Bakery &amp; Kitchen</span>
                        </h2>
                    </div>
                </div>
                {/* <img class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                    src="assets/img/products-02.jpg"> */}
                <div class="bg-faded p-5 rounded">
                    <p class="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals
                        perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever
                        possible, alongside premium vendors for specialty goods.
                    </p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- <section class="page-section">
        <div class="container">
            <div class="product-item">
                <div class="d-flex product-item-title">
                    <div class="d-flex mx-auto bg-faded p-5 rounded">
                        <h2 class="section-heading mb-0">
                            <span class="section-heading-upper">From Around the World</span>
                            <span class="section-heading-lower">Bulk Speciality Blends</span>
                        </h2>
                    </div>
                </div><img class="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded"
                    src="assets/img/products-03.jpg">
                <div class="bg-faded p-5 rounded">
                    <p class="mb-0">Travelling the world for the very best quality coffee is something take pride in.
                        When you visit us, you'll always find new blends from around the world, mainly from regions in
                        Central and South America. We sell our blends in smaller to large bulk quantities. Please visit
                        us in person for more details.
                    </p>
                </div>
            </div>
        </div>
    </section> --> */}

    <section class="page-section about-heading">
        <div class="container">
            {/* <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="assets/img/about.jpg"> */}
            <div class="about-heading-content">
                <div class="row">
                    <div class="col-lg-10 col-xl-9 mx-auto">
                        <div class="bg-faded rounded p-5">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Strong Coffee, Strong Roots</span>
                                <span class="section-heading-lower">&nbsp;About Our Cafe</span>
                            </h2>
                            <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich
                                coffee sourced from artisan farmers in various regions of South and Central America. We
                                are dedicated to travelling the world, finding the best coffee, and bringing back to you
                                here in our cafe.
                            </p>
                            <p class="mb-0">
                                <span>We guarantee that you will fall in&nbsp;</span>
                                <em>lust</em>
                                <span>&nbsp;with our decadent blends the moment you walk inside until you finish your
                                    last sip. Join us for your daily routine, an outing with friends, or simply just to
                                    enjoy some alone time.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <footer class="text-center footer text-faded py-5">
        <div class="container">
            <p class="m-0 small">Copyright&nbsp;©&nbsp;Brand 2022</p>
        </div>
    </footer>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/current-day.js"></script>
</body>

</html> */}
    </div>
  );
}
