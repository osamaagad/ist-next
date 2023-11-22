"use client"

import { usePathname } from "next/navigation";

export default function NavigationArabic() {
    const pathName = usePathname();
    const englishPath = pathName.replace('/ar', '');
    return (
        <header>
            <div className="header">
                <div className="container-fluid">
                    <div className="row d_flex">
                        <div className=" col-md-2 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <a href="/ar/"><img src="/ist-logo.webp" width="80" height="80" alt="#" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-9">
                            <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                                    aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="/ar/">الرئيسية</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/products">منتجات</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/about">من نحن</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/blog">المدونة</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/portfolio">مشاريعنا</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/contact">اتصل بنا</a>
                                        </li>
                                        <li className="nav-item mobile-only">
                                            <a className="nav-link" href={englishPath} style={{ textAlign: 'left' }}>English</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2 d_none desktop-only">
                            <ul className="email text_align_right">

                                {/* <li> <a href="#"> Login </a></li> */}
                                <li> <a href={englishPath}>English</a></li>
                                {/* <li> <a href="#"> <i className="fa fa-search" style="cursor: pointer;" aria-hidden="true"> </i></a> </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
