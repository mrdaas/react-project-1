import React from "react"

function NavBar() {

    return (


        <nav className="navbar navbar-sticky">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#projects-tile">Projects</a></li>
                            <li><a href="#">Profile-link</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                </div>
            </nav>
    )

}

export default NavBar