export default function NavigationArabic() {
    return (
        <header>
            <div className="header">
                <div className="container-fluid">
                    <div className="row d_flex">
                        <div className=" col-md-2 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <a href="/ar/"><img src="/logo.png" alt="#" /></a>
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
                                            <a className="nav-link" href="/ar/about.html">من نحن</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="./blog-ar/index.html">المدونة</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/portfolio.html">مشاريعنا</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/ar/contact.html">اتصل بنا</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2 d_none">
                            <ul className="email text_align_right">

                                {/* <li> <a href="Javascript:void(0)"> Login </a></li> */}
                                <li> <a href="../index.html">English</a></li>
                                {/* <li> <a href="Javascript:void(0)"> <i className="fa fa-search" style="cursor: pointer;" aria-hidden="true"> </i></a> </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
