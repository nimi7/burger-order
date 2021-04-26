import React from 'react'
import { Col, Image } from 'react-bootstrap'
import Admin from './Admin.jpg'


export default function Footer() {
    return (
        <div>
            <footer className="text-center text-white ">
     
                {/* <!-- Grid container --> */}
                <div class="container pt-4">
               
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
   

                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.facebook.com/tytwp.bsbylk/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i class="fab fa-facebook-f"></i
                        ></a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                        ></a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-google"></i
                        ></a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.instagram.com/nimi_wandam/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                        ></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://www.linkedin.com/in/nimrod-wandam-0b86bb179/"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                        ></a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-1"
                            href="https://github.com/nimi7"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>
                    

                </div>



                <div className="text-center text-dark p-3" style={{ backgroundcolor: "rgba(0, 0, 0, 0.2);" }}>

                    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>



        </div>
    )
}