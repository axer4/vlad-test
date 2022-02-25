import Contacts from '../contacts/Contacts';
import FooterNavList from '../footerNavList/FooterNavList';
import Logo from '../logo/Logo';
import './Footer.css';
function Footer () {
    return <div className='footer'>
        <Logo/>
        <FooterNavList/>
        <FooterNavList/>
        <Contacts/>
    </div>
}
export default Footer;