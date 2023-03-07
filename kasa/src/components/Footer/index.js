import { logo } from '../../asssets/logo/LOGOF'
import '../styles/Footer.css'

function Footer() {

	return (
		<footer className='lmj-footer'>
            <img id='logo-footer' src= {logo} alt= "logo kasa footer"/>
			<div className='lmj-footer-elem'>
@2020 Kasa. All rights reserved			</div>
		</footer>
	)
}

export default Footer