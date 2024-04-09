"use client"

import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathName = usePathname();
    return (
        <header>
            <div className="header">
                <div className="container-fluid">
                    <div className="row d_flex">
                        <div className=" col-md-2 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <a href="/"><img src="/ist-logo.webp" height="80" width="80" alt="#" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/products">Products</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/blog">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/portfolio">Portfolio </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">Contact Us</a>
                                        </li>
                                        <li className="nav-item mobile-only">
                                            <a className="nav-link" href={`/ar${pathName}`} style={{ textAlign: 'right' }}>عربي</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2 d_none desktop-only">
                            <ul className="email text_align_right">

                                {/* <li> <a href={`/ar${pathName}`}>عربي</a></li> */}
                                {/* <li> <a href="#"> <i className="fa fa-search" style="cursor: pointer;" aria-hidden="true"> </i></a> </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
      <p className="under-construction">Website under construction</p>
        </header>
    );
}
