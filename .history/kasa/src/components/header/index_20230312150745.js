import { getToPathname } from "@remix-run/router"
import { Link } from "react-router-dom"
import logo from "../../asssets/logo/LOGO.png"
function Header(){
    return (
        <header>
            <img src={logo} alt="logo kasa header"></img>
                    </header>
<nav
                    <Link
                    to = '/'>
                        accueil
                    </Link>
    )

}
export default Header