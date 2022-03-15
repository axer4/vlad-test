import Logo from '../logo/Logo';
import NavList from '../NavList/NavList';
import './Header.css'
function Header () {
    const items : Array<string> = ['О комплексе','Район','Каталог квартир','Ипотека','Контакты']
    return (
    <div className="header">
        <Logo/>
        <NavList/>
    </div>
    )
}
export default Header;