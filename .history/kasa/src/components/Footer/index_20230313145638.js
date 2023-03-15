import { Link } from "react-router-dom"
import logof from "../../asssets/logo/LOGOF.png"
import "./footre"
function Footer() {

	return (
		
		<footer>
			<Link to="/">
				<img id = "logo_footer" src={logof} alt = "logo footer kasa"/>
			</Link>
			<div className='footer_text'>
@2020 Kasa. All rights reserved			</div>
		</footer>
	)
}

export default Footer